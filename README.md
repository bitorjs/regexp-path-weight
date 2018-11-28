# regexp-path-weight
> 对 path-to-regexp 表示的路由 进行权重分析，并给出路由的 权重，可以利用生成的权重进行路由排序问题。避免因手动排序造成的路由混乱且不可控的情况

### install
> npm i -S regexp-path-weight



#### e.g.
```
const weight = require('regexp-path-weight')

let path = "/e/adf:id/f";

console.log(calc(path)) 
// 输出 11.6661
```