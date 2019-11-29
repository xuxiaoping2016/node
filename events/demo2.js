const EventEmitter = require("events");

class MyEmitter extends  EventEmitter{

}

const e = new MyEmitter();

e.on('event', (a, b) => {
    setImmediate(() => {
      console.log('异步进行');
    });
  });

e.on('event',function(a,b){
    console.log(a, b, this, this === e)
})

e.emit('event',1,2)