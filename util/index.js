const util = require("util");

async function fn() {
    return 'hello world';
}
const callbackFunction = util.callbackify(fn);
  
callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});


function callbackifyOnRejected(reason, cb) {
    /** adj.	品质优秀的; 能力卓越的; 借助于灵感创作的; (与名词、形容词以及副词构成形容词) 受…影响的;
     v.	激励; 鼓舞; 赋予灵感; 引起联想; 启发思考; 使产生(感觉或情感);
     **/

    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish(v.	区分; 辨别; 分清; 成为…的特征) between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
      const newReason = new ERR_FALSY_VALUE_REJECTION();
      newReason.reason = reason;
      reason = newReason;
      Error.captureStackTrace(reason, callbackifyOnRejected);
    }
    return cb(reason);
  }
  
  function callbackify(original) {
    if (typeof original !== 'function') {
      throw new ERR_INVALID_ARG_TYPE('original', 'Function', original);
    }
  
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified(...args) {
      const maybeCb = args.pop();
      if (typeof maybeCb !== 'function') {
        throw new ERR_INVALID_ARG_TYPE('last argument', 'Function', maybeCb);
      }
      const cb = (...args) => { Reflect.apply(maybeCb, this, args); };
      // In true node style we process the callback on `nextTick` with all the
      // implications (stack, `uncaughtException`, `async_hooks`)
      Reflect.apply(original, this, args)
        .then((ret) => process.nextTick(cb, null, ret),
              (rej) => process.nextTick(callbackifyOnRejected, rej, cb));
    }
  
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified,
                            Object.getOwnPropertyDescriptors(original));
    return callbackified;
  }
  


  /**
   * Node.js如何实现 callback 和 promise 的互相转换
   * https://www.jianshu.com/p/1725e9b24706
   */