mpersist=p=n=>n<10?0:p(s(n))+1
s=(n,a=1)=>n==0?1:n%10*s(n/10|0)

// above only works up to 9007199254740991
// this should work up to 1.7976931348623157e+308 :
// s=(n,a=1)=>n==0?1:n%10*s(Math.trunc(n/10))


/* test harness */
assert=(e,m)=>e?console.log('PASS'):console.error(`ERROR -- ${m}`)
let tests = [
  [   0, 0],
  [ 123, 1],
  [5499, 2],
  [277777788888899, 11],
  // [77777733332222222222222222222, 11] // TOO LARGE!
]
for(let t of tests) {
  let r = mpersist(t[0])
  assert(r === t[1], `got ${r} instead of ${t[1]}`)
}