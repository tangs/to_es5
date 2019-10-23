const https = require('https')
const qs = require('querystring');
const fs = require('fs');

const host = 'api.weijiuye.com.cn';
// 烹饪
// const examId = '1563504780152398';
// const distDir = 'cfg2';
// 汽车
const examId = '1563428974900338';
const distDir = 'cfg4';

let examRecordId = '1571808150901527';
const token = 'de5574896d25492d81c5a9e03a91b053'
const url_start = `https://${host}/exam/exam/start_exam?examId=${examId}&token=${token}`;
// const url_get_score = `https://${host}/exam/exam/get_user_score?examRecordId=${examRecordId}&token=${token}`;
const url_crete_anser = 'https://${host}/exam/exam/create_exam_answer';


// const proxy = http.createServer((req, res) => { 
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end();
// })
// const option = {
//     host: 
// }

const options = {  
    hostname: host,  
    port: 443,  
    path: url_start,  
    method: 'GET',  
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded'  
    }  
};  

// let datas = '';
const start_exam = (callback) => {
    https.get(url_start, (res) => {
        const datas = [];  
        let size = 0;  
        res.on('data', function (data) {  
            datas.push(data);  
            size += data.length;  
        //process.stdout.write(data);  
        });  
        res.on("end", function () {
            const buff = Buffer.concat(datas, size);
            const result = buff.toString();
            const json = JSON.parse(result);
            if (json.data.papers == null) {
                json.data.papers = json.data;
            }
            const { RADIO, MULTISELECT, JUDGE } = json.data.papers;
            const arr = [RADIO, MULTISELECT, JUDGE];
            const ids = [];
            for (const data of arr) {
                for (const data1 of data) {
                    ids.push(data1.examQuestionId);
                }
            }
            examRecordId = json.data.examRecordId;
            console.log(json.data.examRecordId);
            callback(json.data.examRecordId, ids);
        });  
    }).on("error", function (err) {  
        Logger.error(err.stack)  
        // callback.apply(null);  
    }); 
};

const create_exam_answer = (postData, callback) => {
    let options = {
        hostname: host,
        path: '/exam/exam/create_exam_answer',
        method: 'POST',
        port: 443,
        headers: {        
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'DNT': 1,
            // 'Origin': 'https://m.cdwork.cn',
            // 'Referer': 'https://m.cdwork.cn/',
            // 'Sec-Fetch-Mode': 'cors',
            // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
            // 'Content-Length': Buffer.byteLength(postData)        
        }    
    };
    let req = https.request(options, res => {
        let dd = '';
        res.on('data', secCheck => {
            dd += secCheck;
        });
        
        res.on('end', secCheck => {        
            console.log(dd);
            callback();
        })
        
        res.on('error', err => {        
            console.error(err);       
        });
     });
     req.write(postData);
     req.end();
    //  console.log(postData);
};

const start_get_score = (callback) => {
    const url = `https://${host}/exam/exam/get_user_score?examRecordId=${examRecordId}&token=${token}`;

    https.get(url, (res) => {
        const datas = [];  
        let size = 0;  
        res.on('data', function (data) {  
            datas.push(data);  
            size += data.length;  
        //process.stdout.write(data);  
        });  
        res.on("end", function () {
            const buff = Buffer.concat(datas, size);
            // const result = buff.toString();
            fs.writeFileSync(`${distDir}/${Date.now()}.json`, buff);
            callback();
        });  
    }).on("error", function (err) {  
        Logger.error(err.stack)  
        // callback.apply(null);  
    }); 
};
const run = () => {
    new Promise((resolve, reject) => {
        start_exam((examRecordId, ids) => {
            resolve([examRecordId, ids]);
        })
    }).then(([examRecordId, ids]) => {
        console.log(`questions len: ${ids.length}`);
        const examAnswerList = [];
        for (const id of ids) {
            examAnswerList.push({
                examQuestionId: id,
                examQuestionScenarioId: '',
                examAnswers: [],
                examRecordId: examRecordId
            });
        }
        // const listData = JSON.stringify(examAnswerList);
        // const data = `socket=0&examAnswerList=${listData}&token=${token}`;
        const data = {
            socket: 0,
            examAnswerList: JSON.stringify(examAnswerList),
            token: token
        };
        // console.log(qs.encode(data));
        // console.log(data);
        create_exam_answer(qs.encode(data), () => {
            start_get_score(() => {
                setTimeout(run, 5000);
            })
        });
    });
};
run();
