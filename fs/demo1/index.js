const fs = require('fs');

// 删除文件
// fs.unlink('F:/node/tem/hello.txt',(err) => {
//     if(err) throw err;
//     console.log("chenggong shangchu")
// })

// 重命名
// fs.rename('F:/node/tem/hello.txt', 'F:/node/tem/world.txt', (err) => {
//     if (err) throw err;
//     console.log('重命名完成');
// });

// 获取文件属性
// {
//     "dev": 3898406003,
//     "mode": 33206,
//     "nlink": 1,
//     "uid": 0,
//     "gid": 0,
//     "rdev": 0,
//     "ino": 1688849860542483,
//     "size": 4,
//     "atimeMs": 1541387063001.524,
//     "mtimeMs": 1541387063001.524,
//     "ctimeMs": 1541387176872.8455,
//     "birthtimeMs": 1541387057472.8672,
//     "atime": "2018-11-05T03:04:23.002Z",
//     "mtime": "2018-11-05T03:04:23.002Z",
//     "ctime": "2018-11-05T03:06:16.873Z",
//     "birthtime": "2018-11-05T03:04:17.473Z"
// }
fs.stat('F:/node/tem/world.txt', (err, stats) => {
    if (err) throw err;
    console.log(`文件属性: ${JSON.stringify(stats)}`);
});