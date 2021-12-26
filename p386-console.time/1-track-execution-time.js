function myFunction() {
  let i = 10**5
  while ( i-- ) {}
}

const start = new Date().getTime()
for (x=0; x<1000; x++) {
  myFunction()
}
const timeSpent = new Date().getTime() - start
console.log(timeSpent, 'milisecond')

