

const  fs = require('fs')
// console.log("...//..",process.cwd())
// const appDirectory = fs.realpathSync(process.cwd());
// console.log(appDirectory)

var cache = {'/':'/node/module'};
fs.realpath('/module/passwd', cache, function (err, resolvedPath) {
  if (err) throw err;
  console.log(resolvedPath);
});