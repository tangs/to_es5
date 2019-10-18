// for (let i = 0; i < 100; ++i) {
//     console.log(i);
// }

export class A {
    func() {
        console.log('aaa');
    }
}

function* genFunc() {
    yield [1, 2, 3];
    yield 4;
    return 100;
}

function getFunc1() {
    const _context = {};
    let idx = 0;
    const sum = 10;
    _context[Symbol.iterator] = () => {
        return {
            next: function() {
                if (idx < sum) {
                    return { value: idx++, done: false };
                } else {
                    return { value: idx++, done: true };
                }
            }
        };
    };
    return _context;
}

for (const v of genFunc()) {
    console.log(v);
}

for (const v of getFunc1()) {
    console.log(v);
}
