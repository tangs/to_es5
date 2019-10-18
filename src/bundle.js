import * as AAA from './1';

const a = new Map();
a.set('key', 'value');
console.log(a.get('key'));
const b = new Set();
b.add('a');
b.add('b');
for (const k of b) {
    console.log(k);
}
for (const [k, v] of a) {
    console.log(k, v);
}
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});
promise.then(() => {
    console.log('end');
});
const c = new AAA.A();
c.func();
