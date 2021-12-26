// if you use util.format in your code you must import util. you
// also need to pass util.format into console.log

const util=require('util')
console.log(util.format('%s:%d', 'foo', 123))

const myJson = { a: { b: { c: 'c' } } }
console.log(util.format('%j',  myJson))


