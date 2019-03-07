const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('触发事件');
// });
// myEmitter.emit('event');



//===================================
/**
 * eventEmitter.emit() 方法可以传任意数量的参数到监听器函数。 当监听器函数被调用时， 
 * this 关键词会被指向监听器所绑定的 EventEmitter 实例
 */
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter);
// });
// myEmitter.emit('event', 'a1', 'b1');

// 打印:
//   a1 b1 MyEmitter {
//     _events: { event: [Function] },
//     _eventsCount: 1,
//     _maxListeners: undefined } true


// ========================
//错误事件
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('错误信息');
});
myEmitter.emit('error', new Error('错误信息'));
// 打印: 错误信息