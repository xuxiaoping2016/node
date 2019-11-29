
// process.exitCode = 20009;
// process.on('beforeExit', (code) => {
//     console.log(`beforeExit退出码: ${code}`);
//   });

// process.on('exit', (code) => {
// console.log(`退出码: ${code}`);
// });



// process.on('beforeExit', (code) => {
//   console.log('进程 beforeExit 事件的代码: ', code);
// });

// process.on('exit', (code) => {
//   console.log('进程 exit 事件的代码: ', code);
// });
// process.exit(3000)
// console.log('此消息最新显示');


//=========== 参考文档 https://blog.csdn.net/u010365819/article/details/102837604  =========

// process.on('exit', function() {
//   setTimeout(function() {
//       console.log('主事件循环已停止，所以不会执行');
//   }, 0);
//   console.log('退出前执行');
// });
// setTimeout(function() {
//   console.log('1');
// }, 500);

// ====================================================
// process.on('uncaughtException', function(err) {
//   console.log('捕获到一个异常',err);
// });
// var a = '123';
// a.a(); //触发异常事件
// console.log('这句话扑街了，不会显示出来');

//=========================================================================
// process.on('SIGINT', function(sing) {
//   console.log('收到 SIGINT 信号。',sing);
// });

// console.log('试着按下 ctrl + C');
// setTimeout(function() {
//   console.log('end');
// }, 5000);

//=========================================================================
// console.log('execPath',process.execPath)
// console.log('cwd',process.cwd())

// process.on('abort',function(data){
//   console.log('abort',data)
// })

// process.abort();
// console.log('在输出这句话之前就退出了');


// var path = require('path');
// var process = require('process')

// console.log('当前目录：' + process.cwd()); //当前目录：F:\node
// try {
//     process.chdir(path.resolve('./','process/events'));
//     console.log('新目录：' + process.cwd()); //新目录：E:\github\nodeAPI\process\tmp
// }
// catch (err) {
//     console.log('chdir: ' + err);
// }
//==================================================================
console.log('开始');
process.nextTick(function() {
    console.log('nextTick 回调');
});
setInterval(function(){
    console.log('新的EventLoop!')
    }, 2000);
console.log('当前EventLoop');



