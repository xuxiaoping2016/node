;(function(){
    console.log("process.cwd()",process.cwd())
    // console.log(process.channel)
    // Pipe {
    //     buffering: false,
    //     pendingHandle: null,
    //     onread: [Function],
    //     sockets: { got: {}, send: {} } }
    console.log("1",process.connected)
    setTimeout(function(){
        // process.disconnect();
        // console.log("2",process.connected)
        process.send({
            name:"xuxi"
        })
        process.exit(0)
    },1000)
})()