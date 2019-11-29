const fs = require("fs")
const path = require("path")
const glob = require('glob')

// var str = fs.realpathSync('.');
// console.log(str);



const fspa = fs.realpathSync(process.cwd())
const paths = glob.sync('./fs/**/*.js');
console.log(paths)
const ps = paths.map((p) =>{
    console.log(p)
    const r =  path.posix.resolve(p);
    console.log("r",r, typeof r)
    return r
})
console.log(ps)

// const ps = [ './fs/demo1', './fs/demo1/index.js', './fs/index.js' ];
// console.log(path.resolve('./fs/demo1'))