/* 

module 作用域
__dirname
__filename

*/

const module ={
    __dirname :'',
    __filename : '',
    exports:{

    },
    module:{
        id:'',
        filename:'',
        parent:'',
        children:[],
        require:'fn',
        loaded:'模块是否已经加载完成，或正在加载中',
        paths:'',
        exports:{}
    },
    require:function(){}
}

// require.cache
// require.main
// require.resolve(request[, options])
// require.resolve.paths(request)





// const cache = {
//      'F:\\node\\module\\foo.js':
//        Module {
//          id: '.',
//          exports: {},
//          parent: null,
//          filename: 'F:\\node\\module\\foo.js',
//          loaded: false,
//          children: [ [Module] ],
//          paths:
//           [ 'F:\\node\\module\\node_modules',
//             'F:\\node\\node_modules',
//             'F:\\node_modules' ] },
//       'F:\\node\\module\\circle.js':
//        Module {
//          id: 'F:\\node\\module\\circle.js',
//          exports:
//           { area: [Function],
//             circumference: [Function],
//             Square: [Function: Square] },
//          parent:
//           Module {
//             id: '.',
//             exports: {},
//             parent: null,
//             filename: 'F:\\node\\module\\foo.js',
//             loaded: false,
//             children: [Array],
//             paths: [Array] },
//          filename: 'F:\\node\\module\\circle.js',
//          loaded: true,
//          children: [],
//          paths:
//           [ 'F:\\node\\module\\node_modules',
//             'F:\\node\\node_modules',
//             'F:\\node_modules' ] } }



const mo = require('module')
// mo.builtinModules  nodejs 提供的内置模块的名称列表
// createRequireFromPath(filename)  构造一个本地require函数
