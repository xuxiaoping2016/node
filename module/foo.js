const circle = require('./circle.js');
const builtin = require('module')
// console.log(module,require.main)
// console.log(require.main === module)
// console.log(require.cache)
// console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`);


// console.log(builtin)
// const data = { [Function: Module]
//     builtinModules:
//      [ 'async_hooks',
//        'assert',
//        'buffer',
//        'child_process',
//        'console',
//        'constants',
//        'crypto',
//        'cluster',
//        'dgram',
//        'dns',
//        'domain',
//        'events',
//        'fs',
//        'http',
//        'http2',
//        '_http_agent',
//        '_http_client',
//        '_http_common',
//        '_http_incoming',
//        '_http_outgoing',
//        '_http_server',
//        'https',
//        'inspector',
//        'module',
//        'net',
//        'os',
//        'path',
//        'perf_hooks',
//        'process',
//        'punycode',
//        'querystring',
//        'readline',
//        'repl',
//        'stream',
//        '_stream_readable',
//        '_stream_writable',
//        '_stream_duplex',
//        '_stream_transform',
//        '_stream_passthrough',
//        '_stream_wrap',
//        'string_decoder',
//        'sys',
//        'timers',
//        'tls',
//        '_tls_common',
//        '_tls_wrap',
//        'trace_events',
//        'tty',
//        'url',
//        'util',
//        'v8',
//        'vm',
//        'zlib',
//        'v8/tools/splaytree',
//        'v8/tools/codemap',
//        'v8/tools/consarray',
//        'v8/tools/csvparser',
//        'v8/tools/profile',
//        'v8/tools/profile_view',
//        'v8/tools/logreader',
//        'v8/tools/arguments',
//        'v8/tools/tickprocessor',
//        'v8/tools/SourceMap',
//        'v8/tools/tickprocessor-driver',
//        'node-inspect/lib/_inspect',
//        'node-inspect/lib/internal/inspect_client',
//        'node-inspect/lib/internal/inspect_repl' ],
//     _cache:
//      { 'F:\\node\\module\\foo.js':
//         Module {
//           id: '.',
//           exports: {},
//           parent: null,
//           filename: 'F:\\node\\module\\foo.js',
//           loaded: false,
//           children: [Array],
//           paths: [Array] },
//        'F:\\node\\module\\circle.js':
//         Module {
//           id: 'F:\\node\\module\\circle.js',
//           exports: [Object],
//           parent: [Module],
//           filename: 'F:\\node\\module\\circle.js',
//           loaded: true,
//           children: [],
//           paths: [Array] } },
//     _pathCache:
//      { 'F:\\node\\module\\foo.js\u0000': 'F:\\node\\module\\foo.js',
//        './circle.js\u0000F:\\node\\module': 'F:\\node\\module\\circle.js' },
//     _extensions:
//      { '.js': [Function], '.json': [Function], '.node': [Function] },
//     globalPaths:
//      [ 'C:\\Users\\admin\\.node_modules',
//        'C:\\Users\\admin\\.node_libraries',
//        'C:\\Program Files\\nodejs\\lib\\node' ],
//     wrap: [Function],
//     wrapper:
//      [ '(function (exports, require, module, __filename, __dirname) { ',
//        '\n});' ],
//     _debug: [Function: deprecated],
//     _findPath: [Function],
//     _nodeModulePaths: [Function],
//     _resolveLookupPaths: [Function],
//     _load: [Function],
//     _resolveFilename: [Function],
//     runMain: [Function],
//     _initPaths: [Function],
//     _preloadModules: [Function],
//     Module: [Circular] }


// console.log(require.cache)
// const db = { 
//     'F:\\node\\module\\foo.js':
//         Module {
//         id: '.',
//         exports: {},
//         parent: null,
//         filename: 'F:\\node\\module\\foo.js',
//         loaded: false,
//         children: [ [Module] ],
//         paths:
//         [ 'F:\\node\\module\\node_modules',
//             'F:\\node\\node_modules',
//             'F:\\node_modules' ] },
//     'F:\\node\\module\\circle.js':
// Module {
//   id: 'F:\\node\\module\\circle.js',
//   exports:
//    { area: [Function],
//      circumference: [Function],
//      Square: [Function: Square] },
//   parent:
//    Module {
//      id: '.',
//      exports: {},
//      parent: null,
//      filename: 'F:\\node\\module\\foo.js',
//      loaded: false,
//      children: [Array],
//      paths: [Array] },
//     filename: 'F:\\node\\module\\circle.js',
//     loaded: true,
//     children: [],
//     paths:[ 'F:\\node\\module\\node_modules',
//         'F:\\node\\node_modules',
//         'F:\\node_modules' ] 
//     } 
// };



// console.log(require.resolve.paths(__filename))
// const pathss = [
//     'F:\\node\\module\\node_modules',
//     'F:\\node\\node_modules',
//     'F:\\node_modules',
//     'C:\\Users\\admin\\.node_modules',
//     'C:\\Users\\admin\\.node_libraries',
//     'C:\\Program Files\\nodejs\\lib\\node' 
// ]


console.log(module)

Module {
    id: '.',
    exports: {},
    parent: null,
    filename: 'F:\\node\\module\\foo.js',
    loaded: false,
    children:
     [ Module {
         id: 'F:\\node\\module\\circle.js',
         exports: [Object],
         parent: [Circular],
         filename: 'F:\\node\\module\\circle.js',
         loaded: true,
         children: [],
         paths: [Array] } ],
    paths:
     [ 'F:\\node\\module\\node_modules',
       'F:\\node\\node_modules',
       'F:\\node_modules' ] }

       