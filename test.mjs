import { Hashmap } from "./hashmap.mjs";

const test = new Hashmap(0.75, 16);
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('apple', '1');
test.set('banana', '2');
test.set('carrot', '3');

test.set('moon', 'silver')

console.dir(test, { depth: null, colors: true });
// console.log(test.get('fksmfs'));
// console.log(test.has('lfsmkfs'));
// console.log(test.length());
// test.clear();
// console.log(test.length());

// console.dir(test, { depth: null, colors: true });
// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// console.log(test.remove('dadm'));
// console.dir(test, { depth: null, colors: true });