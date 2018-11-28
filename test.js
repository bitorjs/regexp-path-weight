const calc = require('./index')

var ori = [
  '*',
  "/:id",
  "/a/b/c",
  "/e/:id/f",
  "/e/adf:id/f",
  "/:f0/:f1/:f2",
  "/a/:d/m",
  "/a/:e",
  "/a/e/*"
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  console.log(r, calc(path))

  // [ '*' ] 100
  // [ '', ':id' ] 19
  // [ '', 'a', 'b', 'c' ] 11.11
  // [ '', 'e', ':id', 'f' ] 11.91
  // [ '', 'e', 'adf:id', 'f' ] 11.6661
  // [ '', ':f0', ':f1', ':f2' ] 19.99
  // [ '', 'a', ':d', 'm' ] 11.91
  // [ '', 'a', ':e' ] 11.9
  // [ '', 'a', 'e', '*' ] 11.2
}