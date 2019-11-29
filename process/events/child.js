const cp = require("child_process")
const { resolve } = require("path")

;(async () => {
    const script = resolve(__dirname,'./childf.js');
    const child = cp.fork(script,[])
    let invoked = false;

    child.on("error",err => {
        if(invoked) return;
        invoked = true;
        console.log("error",err)
    })

    child.on("disconnect",err => {
        console.log("disconnect",err)
    })

    child.on('exit', code => {
        let err = code === 0 ? null : new Error('exit code ' + code)
        console.log(err)
      })
    
    child.on('message', data => {
        console.log(data) 
    })

})()