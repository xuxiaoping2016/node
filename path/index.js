const path = require('path');

// basename, dirname , extname, delimiter, path.sep
// path.format,parse, normalize , join，resolve，relative,toNamespacedPath(path)
// path.isAbsolute, path.posix, path.win32
/**
 * path.basename() 方法返回 path 的最后一部分
 * 
 * 
 */

// const base = path.basename('C:\\temp\\myfile.html');
// console.log(base)


//--------------------------------------------------------------------
// const base2 = path.win32.basename('C:\\temp\\myfile.html');
// console.log(base2)

// const base3 = path.posix.basename('C:\\temp\\myfile.html');
// console.log(base3)

// const b1 = path.basename('/foo/bar/baz/asdf/quux.html');
// const b2 = path.basename('/foo/bar/baz/asdf');

// console.log(b1,b2)
//---------------------------------------------------------------------


// console.log(process.env.PATH)
// console.log(path.delimiter)
// console.log(process.env.path.split(path.delimiter))
//=====================================================

// console.log(path.dirname('/foo/bar/baz/asdf/quux'))
// console.log(path.dirname('/foo/bar/baz/asdf'))

//=====================================================
console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  }))

console.log(path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
  }))