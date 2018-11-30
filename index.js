module.exports = function pathWeigth(path) {
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
        let cellWeigth = base;
        base *= Math.pow(0.9, ind + 1);
        if (item.match(/\?$/) !== null) {
          // base += cellWeigth * 0.09 * 0.09;
        } else if (item.match(/\+$/) !== null) {
          // base += cellWeigth * 0.09 * 1.01;
        } else if (item.match(/\*$/) !== null) {
          // base += cellWeigth * 0.09 * 1.02;
        }
      } else {
        base *= 0.1;
      }
    }
    ret += base;
  }
  return ret;
}