function myFunction() {
  let i = 10**5
  while ( i-- ) {}
}

console.time('benchmark myFunction')
myFunction()
console.timeEnd('benchmark myFunction')

