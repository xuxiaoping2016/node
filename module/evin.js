const a = require('./ev');
a.on('ready', () => {
  console.log('模块 a 已准备好');
});

// console.log(module.require('F:\\node\\module\\ev.js'))
// Module {
//     id: 'F:\\node\\module\\ev.js',
//     exports:
//      EventEmitter { _events: {}, _eventsCount: 0, _maxListeners: undefined },
//     parent:
//      Module {
//        id: '.',
//        exports: {},
//        parent: null,
//        filename: 'F:\\node\\module\\evin.js',
//        loaded: false,
//        children: [ [Circular] ],
//        paths:
//         [ 'F:\\node\\module\\node_modules',
//           'F:\\node\\node_modules',
//           'F:\\node_modules' ] },
//     filename: 'F:\\node\\module\\ev.js',
//     loaded: false,
//     children: [],
//     paths:
//      [ 'F:\\node\\module\\node_modules',
//        'F:\\node\\node_modules',
//        'F:\\node_modules' ] }
//   EventEmitter {
//     _events: { ready: [Function] },
//     _eventsCount: 1,
//     _maxListeners: undefined }


// console.log(module.builtinModules)
console.log(",,..//,,.",require.main === module)
// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: 'F:\\node\\module\\evin.js',
//   loaded: false,
//   children:
//    [ Module {
//        id: 'F:\\node\\module\\ev.js',
//        exports: [EventEmitter],
//        parent: [Circular],
//        filename: 'F:\\node\\module\\ev.js',
//        loaded: true,
//        children: [],
//        paths: [Array] } ],
//   paths:
//    [ 'F:\\node\\module\\node_modules',
//      'F:\\node\\node_modules',
//      'F:\\node_modules' ] }