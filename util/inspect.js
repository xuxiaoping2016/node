const util = require('util');
const fs = require("fs")

// util.inspect 打印对象的字符串格式
// function demo() {
//     this.name = 'helloDemo';
//     this.toString = function() {
//         return this.name;
//     };
// }
// var d = new demo();
// console.log(util.inspect(d));
// console.log(util.inspect(d, true));


// util.getSystemErrorName 获取系统错误名称
// fs.access('file/that/does/not/exist', (err) => {
//     const name = util.getSystemErrorName(err.errno);
//     console.error(name);  // ENOENT
//   });

//=====================================================================
//util.deprecate(fn, msg[, code])



// util.format 方法返回一个格式化后的字符串======================================================
// console.log(util.format('i am %s, i like %s','coder','coding'))
// console.log(util.format('i am %s, i like %s','coder'))
// console.log(util.format('i am %s, i like %s','coder','coding','bule'))
// console.log(util.format(1,2,3))
// console.log(util.format('i am %s, i like %s'))
// const ob = {
//   name: 'xuxiao',
//   age:"12"
// }

// console.log('s--',util.format('i am %s',ob))
// console.log('d--',util.format('i am %d',12))
// console.log('i--',util.format('i am %i','3'))
// console.log('f--',util.format('i am %f am %f','32',false))
// console.log('j--',util.format('i am %j',ob))
// console.log('o--',util.format('i am %o',ob))
// console.log('O--',util.format('i am %O',ob))
// console.log('c--',util.format('i am %c',ob))
// console.log('%--',util.format('i am %%',ob))

// util.types ===============================================
function foo() {
  console.log(util.types.isArgumentsObject(arguments));  // Returns true
}

foo()

const ob = {
    name: 'xuxiao',
    age:"12"
  }
console.log(util.types.isArgumentsObject(ob))  // returns false;