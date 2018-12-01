// [*?]/: ---->  [*?]//:
function double(path) {
  return path.replace(/[\*\?]\/\:/g, '*//:');
}

// /:xxxx*/ ----> /
function simplify(path) {
  path = double(path)
  return path.replace(/\/:[^\/]*[\*\?]\/?/g, '')
}

// '/:page*/a/:fsd*/b' '/a/b'  ------> ["/:page*/", "/:fsd*/"]
// 
function posAnalysis(path) {
  path = double(path)
  return path.match(/\/:[^\/]*[\*\?]\/?/g)
}

// none star
function normal(path) {
  const arr = path.split('/');
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let base = 100 / Math.pow(10, i)

    if (item === '*') {
      base *= 1;
    } else {
      let ind = item.indexOf(':');
      if (ind > -1) {
        base *= Math.pow(0.9, ind + 1);
      } else {
        base *= 0.1;
      }
    }
    ret += base;
  }
  return ret;
}

const max = 100;
module.exports = function pathWeigth(path) {
  let apath = simplify(path)
  // 
  if (apath === '') {
    console.log(`''`, [''], max)
    return max;
  }
  if (apath === '*') {
    console.log(`'*'`, ['*'], max)
    return max;
  }

  if (apath === '/*') {
    console.log(`'/*'`, ['/*'], max)
    return max;
  }
  let isMatchAll = false;
  if (path !== apath) isMatchAll = true;
  if (apath[0] !== '/') apath = '/' + apath
  const arr = apath.split('/');
  let ret = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let base = max / Math.pow(10, i)
    let nextBase = base * 0.1;

    if (item === '*') {
      base *= 1;
    } else {
      let ind = item.indexOf(':');
      if (ind > -1) {
        base *= Math.pow(0.9, ind + 1);
        if (item.match(/\+$/) !== null) {
          base += nextBase * 0.01;
        }
      } else {
        base *= 0.1;
      }
    }
    ret += base;
  }
  // path, 

  // if (isMatchAll) {
  //   console.log(apath, arr, max - ret)
  //   return max - ret;
  // }
  console.log(apath, arr, ret)
  return ret;
}