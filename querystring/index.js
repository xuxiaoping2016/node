const querystring = require('querystring');

const str = 'foo=bar&abc=xyz&abc=123';

const ret = querystring.parse(str)
console.log(ret)