mpersist=p=n=>n<10?0:p(s(n))+1
s=(n,a=1)=>{
  while(n>10){
    a*=n%10
    n=Math.floor(n/10)
  }
  return a
}


/* test harness */
assert=(e,m)=>e?console.log('PASS'):console.error(`ERROR -- ${m}`)
let tests = [
  [   0, 0],
  [ 123, 1],
  [5499, 2],
  [277777788888899, 11],
  // [77777733332222222222222222222, 11]
]
console.clear()
for(let t of tests) {
  let r = mpersist(t[0])
  assert(r === t[1], `got ${r} instead of ${t[1]}`)
}