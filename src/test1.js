const https = require('https')
const qs = require('querystring');
const fs = require('fs');

const config = require("./config");

const host = 'api.weijiuye.com.cn';
const phone = '13608039966';

// 汽车
let examId = '1563428974900338';
let distDir = 'cfg4';

if (config.type == 2) {
    // 烹饪
    examId = '1563504780152398';
    distDir = 'cfg2';
}

// const examId = '1563504780152398';
// const distDir = 'cfg2';

let examRecordId = '';
let token = ''

// const url_start = `https://${host}/exam/exam/start_exam?examId=${examId}&token=${token}`;
// const url_get_score = `https://${host}/exam/exam/get_user_score?examRecordId=${examRecordId}&token=${token}`;
const url_crete_anser = 'https://${host}/exam/exam/create_exam_answer';


// const proxy = http.createServer((req, res) => { 
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end();
// })
// const option = {
//     host: 
// }

// const options = {  
//     hostname: host,  
//     port: 443,  
//     path: url_start,  
//     method: 'GET',  
//     headers: {  
//         'Content-Type': 'application/x-www-form-urlencoded'  
//     }  
// };  

const login = (callback) => {
    const postData = `lat=30.501881&lng=104.048951&device=1&phone=${phone}&password=0401D4902B2509B80ADB4F57F0DC510E`;
    const options = {
        hostname: host,
        path: '/user/user/user_login',
        method: 'POST',
        port: 443,
        headers: {        
            'Content-Type': 'application/x-www-form-urlencoded'      
        }    
    };
    const req = https.request(options, res => {
        let dd = '';
        res.on('data', secCheck => {
            dd += secCheck;
        });
        
        res.on('end', secCheck => {        
            // console.log(dd);
            const json = JSON.parse(dd);
            token = json.data.token;
            console.log(`token:${token}`);
            callback();
        })
        
        res.on('error', err => {        
            console.error(err);       
        });
     });
     req.write(postData);
     req.end();
};

// let datas = '';
const start_exam = (callback) => {
    const url_start = `https://${host}/exam/exam/start_exam?examId=${examId}&token=${token}`;
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
            if (json.code != 0) {
                console.log(result);
                return;
            }
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
            console.log(`examRecordId:${examRecordId}`);
            callback(json.data.examRecordId, ids);
        });  
    }).on("error", function (err) {  
        Logger.error(err.stack)  
        // callback.apply(null);  
    }); 
};

const create_exam_answer = (postData, callback) => {
    const options = {
        hostname: host,
        path: '/exam/exam/create_exam_answer',
        method: 'POST',
        port: 443,
        headers: {        
            'Content-Type': 'application/x-www-form-urlencoded'      
        }    
    };
    const req = https.request(options, res => {
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
        login(() => {
            start_exam((examRecordId, ids) => {
                resolve([examRecordId, ids]);
            })
        });
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
