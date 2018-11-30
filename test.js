const calc = require('./index')
const pathToRegexp = require('path-to-regexp');

var ori = [
  '*',
  "/:id",
  "/a/b/c",
  "/e/:id/f",
  "/e/adf:id/f",
  "/e/adf:id/f/asdf/asdf",
  "/e/adf:id/f3434",
  "/:f0/:f1/:f2",
  "/a/:d/m",
  "/a/:e",
  "/a/e/*",
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  // console.log(r, calc(path))

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


ori = [
  '*',
  "/:id",
  "/:page?",
  "/:page?/sfdsd",
  "/:page+",
  "/:page+/fsd/er",
  "/:page*",
  "/:page*/werw/yu",
  "/:page/:fsdf",
  "/:page/fsdf"
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  console.log(r, calc(path))

  // [ '*' ] 100
  // [ '', ':id' ] 19
  // [ '', ':page?' ] 19.7
  // [ '', ':page+' ] 19.8
  // [ '', ':page*' ] 19.9
  // [ '', ':page', 'fsdf' ] 19.1
}


ori = [
  '*',
  '/*',
  "/:foo/(.*)",
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  // console.log(r, calc(path))

  // [ '*' ] 100
  // [ '', '*' ] 20
  // [ '', ':foo', '(.*)' ] 19.1
}



ori = [
  '*',
  "/:id",
  "/:page?",
  "/:page+",
  "/:page*",
  "/:icon(\\d+)"
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  // console.log(r, calc(path))

  // [ '*' ] 100
  // [ '', ':id' ] 19
  // [ '', ':page?' ] 19
  // [ '', ':page+' ] 19
  // [ '', ':page*' ] 19
  // [ '', ':icon(\\d+)' ] 19
}

var re = pathToRegexp('/:foo+')
let a = re.exec('/')
let b = re.exec('/a')
let c = re.exec('/a/a')
let d = re.exec('/a/a/sdf')

// console.log(a, b, c, d)