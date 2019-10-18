const fs = require("fs");
const pinyin = require("pinyin");

const S_RADIO = [];
const S_MULTISELECT = [];
const S_JUDGE = [];

const hasSameQ = (datas, data) => {
    for (const cell of datas) {
        if (cell[1].trim() === data.examTitle.trim())
            return true;
    }
    return false;
}

const addCell = (datas, data) => {
    if (hasSameQ(datas, data)) return;
    // const answer = data.answer.substr(1, data.answer.length - 2);
    // const cell = `${data.examTitle},${answer}`;
    const py = pinyin(data.examTitle, {
        style: pinyin.STYLE_TONE2
    });
    let words = '';
    const len = Math.min(py.length, 6);
    for (let i = 0; i < len; ++i) {
        if (py[i].length > 0) {
            const word = py[i][0][0];
            const code = word.codePointAt(0);
            if ((code >= 'a'.codePointAt(0) && code <= 'z'.codePointAt(0))
                || (code >= 'A'.codePointAt(0) && code <= 'Z'.codePointAt(0))) {
                words += py[i][0][0];
            } else {
                words += '_';
            }
        }
    }
    // console.log(py);
    // console.log(words);
    const cell = [words, data.examTitle, data.answer]
    datas.push(cell);
} 

const sort = (datas) => {
    // const arr = [];
    return datas.sort((a, b) => {
        const py1 = pinyin(a[1], {
            style: pinyin.STYLE_TONE2
        });
        const py2 = pinyin(b[1], {
            style: pinyin.STYLE_TONE2
        });
        const len = Math.min(py1.length, py2.length);
        for (let i = 0; i < len; ++i) {
            const [w1, w2] = [py1[i], py2[i]];
            const len1 = Math.min(w1.length, w2.length);
            for (let j = 0; j < len1; ++j) {
                let code1 = w1[j].charCodeAt(j);
                let code2 = w2[j].charCodeAt(j);
                const codeWord1 = a[1][i].charCodeAt(j);
                const codeWord2 = b[1][i].charCodeAt(j);
                if ((codeWord1 >= 'a'.codePointAt(0) && codeWord1 <= 'z'.codePointAt(0))
                    || (codeWord1 >= 'A'.codePointAt(0) && codeWord1 <= 'Z'.codePointAt(0))) {
                    code1 -= 1000;
                } else if (a[1][i] === '（') {
                    code1 = -2000;
                }
                if ((codeWord2 >= 'a'.codePointAt(0) && codeWord2 <= 'z'.codePointAt(0))
                    || (codeWord2 >= 'A'.codePointAt(0) && codeWord2 <= 'Z'.codePointAt(0))) {
                    code2 -= 1000;
                } else if (b[1][i] === '（') {
                    code2 = -2000;
                }
                
                if (code1 !== code2) {
                    return code1 - code2;
                }
            }
            if (w1.length !== w2.length) {
                return w1.length > w2.length ? -1 : 1;
            }
        }
        return 0;
    });
}

const save = (path, datas) => {
    let txt = '';
    datas = sort(datas);
    for (const data of datas) {
        const answer = data[2].substr(1, data[2].length - 2);
        const title = data[1].trim().replace(new RegExp(',','g'), '，');
        let py = data[0].toUpperCase();
        // const code = py.charCodeAt(0);
        // if ((code >= 'A'.charCodeAt(0) && code <='Z'.charCodeAt(0))
        //     || (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)))
        //     py = '';
        const cell = `${py},${title},${answer}`.trim();
        txt += cell + '\n';
    }
    fs.writeFileSync(path, txt);
}

const deal = (datas) => {
    for (const data of datas) {
        // console.dir(data);
        if (data.examTitle == null) {
            data.examTitle = data.examQuestionTitle;
            data.answer = data.successAnswers;
            data.questionType = data.type;
        }
        data.examTitle = data.examTitle.replace(new RegExp('\n','g'), '');
        data.answer = data.answer.replace(new RegExp('\n','g'), '');
        const deal = () => {
        const strs = data.answer.split(',');
            for (let i = 0; i < strs.length; ++i) {
                const str = strs[i];
                if (str.split('\"').length % 2 === 0) {
                    strs[i] = `${strs[i]}，${strs[i + 1]}`;
                    strs.splice(i + 1, 1);
                    let txt = '';
                    for (const str1 of strs) {
                        txt += `${str1},`;
                    }
                    data.answer = txt.substr(0, txt.length - 1);
                    return true;
                } 
            }
            return false;
        }
        do {
            const idx = deal();
            if (idx === false) break;
        } while (true);
        // for (let i = 0; i < data.answer.length; ++i) {
        //     if (data.answer[i].indexOf(',') != -1) {
        //         console.dir(data.answer);
        //         console.log(i);
        //         console.log(data.answer[i]);
        //     }
        //     data.answer[i] = data.answer[i].replace(new RegExp('\n','g'), '');
        //     data.answer[i] = data.answer[i].replace(new RegExp(',','g'), '，');
        // }
        // console.log(`${data.examTitle}, ${data.answer}`);
        switch (data.questionType) {
            case 1: {
                addCell(S_RADIO, data);
            }
            break;
            case 2: {
                addCell(S_MULTISELECT, data);
            }
            break;
            case 3: {
                // if (data.answer !== '["正确"]')
                    addCell(S_JUDGE, data);
            }
            break;
        }
    }
};

const readDatas = (path, obj) => {
    const data = fs.readFileSync(path).toString();
    // console.log(data);
}

readDatas('data/RADIO.csv', S_RADIO);
readDatas('data/MULTISELECT.csv', S_MULTISELECT);
readDatas('data/JUDGE.csv', S_JUDGE);

// const files = [];
// const files1 = fs.readdirSync('cfg');
// console.dir(files1);
// return;


const readDir = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const path = `${dir}/${file}`;
        console.log(path);
        const json = JSON.parse(fs.readFileSync(path).toString());
        if (json.data.papers == null) {
            json.data.papers = json.data;
        }
        const { RADIO, MULTISELECT, JUDGE } = json.data.papers;
        deal(RADIO);
        deal(MULTISELECT);
        deal(JUDGE);
        const sum = S_RADIO.length + S_MULTISELECT.length + S_JUDGE.length;
        console.log(`${sum}: ${S_RADIO.length} ${S_MULTISELECT.length} ${S_JUDGE.length}\n`)
    }
};

readDir('cfg1');
readDir('cfg');
// for (let i = 0; i < 5; ++i) {
//     const path = `cfg1/${i}.json`;
//     console.log(path);
//     const json = JSON.parse(fs.readFileSync(path).toString());
//     if (json.data.papers == null) {
//         json.data.papers = json.data;
//     }
//     const { RADIO, MULTISELECT, JUDGE } = json.data.papers;
//     deal(RADIO);
//     deal(MULTISELECT);
//     deal(JUDGE);
//     const sum = S_RADIO.length + S_MULTISELECT.length + S_JUDGE.length;
//     console.log(`${sum}: ${S_RADIO.length} ${S_MULTISELECT.length} ${S_JUDGE.length}\n`)
// }

// fs.readFile('cfg/1.json', (err, data) => {
//     const json = JSON.parse(data);
//     const { RADIO, MULTISELECT, JUDGE } = json.data.papers;
//     deal(RADIO);
//     deal(MULTISELECT);
//     deal(JUDGE);
// });

save('data/RADIO.csv', S_RADIO);
save('data/MULTISELECT.csv', S_MULTISELECT);
save('data/JUDGE.csv', S_JUDGE);
