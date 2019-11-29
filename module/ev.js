const EventEmitter = require('events');

module.exports = new EventEmitter();

// 处理一些工作，并在一段时间后从模块自身触发 'ready' 事件。
setTimeout(() => {
  module.exports.emit('ready');
}, 1000);

// console.log(module)

// Module {
//     id: '.',
//     exports:
//      EventEmitter { _events: {}, _eventsCount: 0, _maxListeners: undefined },
//     parent: null,
//     filename: 'F:\\node\\module\\ev.js',
//     loaded: false,
//     children: [],
//     paths:
//      [ 'F:\\node\\module\\node_modules',
//        'F:\\node\\node_modules',
//        'F:\\node_modules' ] }


/**
 * exports 变量是在模块的文件级作用域内可用的，且在模块执行之前赋值给 module.exports。
它允许使用快捷方式，因此 module.exports.f = ... 可以更简洁地写成 exports.f = ...。 但是，就像任何变量一样，如果为 exports 赋予了新值，则它将不再绑定到 module.exports：
 * exports = new EventEmitter();
setTimeout(() => {
  exports.emit('ready');
}, 1000);
Module {
    id: '.',
    exports: {},
    parent: null,
    filename: 'F:\\node\\module\\ev.js',
    loaded: false,
    children: [],
    paths:
     [ 'F:\\node\\module\\node_modules',
       'F:\\node\\node_modules',
       'F:\\node_modules' ] }
 */



// var module = {
//     exports: {}
//   };
  
//   (function(module, exports) {
//     exports.multiply = function (n) { return n * 1000 };
//   }(module, module.exports))
  
//   var f = module.exports.multiply;
//   console.log(f(5)) // 5000 



//   function require(/* ... */) {
//     const module = { exports: {} };
//     ((module, exports) => {
//       // 模块代码在这。在这个例子中，定义了一个函数。
//       function someFunc() {}
//       exports = someFunc;
//       // 此时，exports 不再是一个 module.exports 的快捷方式，
//       // 且这个模块依然导出一个空的默认对象。
//       module.exports = someFunc;
//       // 此时，该模块导出 someFunc，而不是默认对象。
//     })(module, module.exports);
//     return module.exports;
//   }

console.log("期望值false",require.main === module)