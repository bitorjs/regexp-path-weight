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
  "/:page",
  "/sfdsd",
  "/:page?",
  "/:page?/sfdsd",
  "/:page?/:sfdsd",
  "/:page?/:sfdsd?",
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  // console.log(r, calc(path))

  // [ '*' ] 100
  // [ '', ':page' ] 19
  // [ '', 'sfdsd' ] 11
  // [ '', ':page?' ] 19.09
  // [ '', ':page?', 'sfdsd' ] 19.19
  // [ '', ':page?', ':sfdsd' ] 19.99
  // [ '', ':page?', ':sfdsd?' ] 19.999
}


ori = [
  '*',
  "/:page",
  "/sfdsd",
  "/:page*",
  "/:page*/sfdsd",
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  // console.log(r, calc(path))

  // [ '*' ] 100
  // [ '', ':page' ] 19
  // [ '', 'sfdsd' ] 11
  // [ '', ':page*' ] 19.09
  // [ '', ':page*', 'sfdsd' ] 19.19
}

ori = [
  '*',
  "/:page",
  "/sfdsd",
  "/:page*",
  "/:page*/sfdsd",
  "/:page*/:sfdsd",
  "/:page*/:sfdsd?",
  "/:page*/:sfdsd*",
  "/:page*/:sfdsd?/:sfdsd?",
  "/:page*/:sfdsd*/:sfdsd?",
  "/:page*/:sfdsd?/:sfdsd*",
  "/:page*/:sfdsd*/:sfdsd*",
  "/:page*/:sfdsd?/:sfdsd?/a",
  "/:page*/:sfdsd*/:sfdsd?/b",
  "/:page*/:sfdsd?/:sfdsd?/:sfdsd*",
  "/:page*/:sfdsd*/:sfdsd?/:sfdsd*",
  "/:page*/:sfdsd?/:sfdsd/:sfdsd*",
  "/:page*/:sfdsd*/:sfdsd/:sfdsd*",
  "/:page*/sfdsd/twe",
  "/:page*/:sfdsd/twe",
  "/:page?",
  "/:page?/sfdsd",
  "/:page?/:sfdsd",
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  calc(path)
  // '*' [ '' ] 100
  // /:page [ '', ':page' ] 19
  // /sfdsd [ '', 'sfdsd' ] 11
  // '' [ '' ] 100
  // /sfdsd [ '', 'sfdsd' ] 11
  // /:sfdsd [ '', ':sfdsd' ] 19
  // '' [ '' ] 100
  // '' [ '' ] 100
  // '' [ '' ] 100
  // '' [ '' ] 100
  // '' [ '' ] 100
  // '' [ '' ] 100
  // /a [ '', 'a' ] 11
  // /b [ '', 'b' ] 11
  // '' [ '' ] 100
  // '' [ '' ] 100
  // /:sfdsd [ '', ':sfdsd' ] 19
  // /:sfdsd [ '', ':sfdsd' ] 19
  // /sfdsd/twe [ '', 'sfdsd', 'twe' ] 11.1
  // /:sfdsd/twe [ '', ':sfdsd', 'twe' ] 19.1
  // '' [ '' ] 100
  // /sfdsd [ '', 'sfdsd' ] 11
  // /:sfdsd [ '', ':sfdsd' ] 19
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
  '/*',
  "/:id",
  "/:page?",
  "/:page+",
  "/:page*"
]

for (let i = 0; i < ori.length; i++) {
  const path = ori[i];
  const r = path.split('/')
  // calc(path)

  // '*' [ '*' ] 100
  // /:id [ '', ':id' ] 19
  // '' [ '' ] 100
  // /:page+ [ '', ':page+' ] 19.009999999999998
  // '' [ '' ] 100
}

// var re = pathToRegexp('/:foo+')
// let a = re.exec('/')
// let b = re.exec('/a')
// let c = re.exec('/a/a')
// let d = re.exec('/a/a/sdf')

// console.log(a, b, c, d)

// re = pathToRegexp('/:page*/fsd/er')
// a = re.exec('/ss/fsd/')


// re = pathToRegexp('/:page+/fsd/er')
// a = re.exec('/dsf/adf/fsd/er')

re = pathToRegexp('/:page*/a/:fsd*/b')
a = re.exec('/a/b')
console.log(a)