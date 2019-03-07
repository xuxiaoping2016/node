// const buf = Buffer.alloc(5);
// console.log(buf);

// const buf2 = Buffer.alloc(5, 'a');
// console.log("buf2",buf2);

// const buf3 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
// console.log("buf3",buf3);

// const buf4 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'utf8');
// buf4.fill('aGVsbG8gd29ybGQ=', 'base64');
// console.log("buf4",buf4);


// const str = '\u00bd + \u00bc = \u00be';
// console.log(`${str}: ${str.length} 个字符, ` +
//             `${Buffer.byteLength(str, 'utf8')} 个字节`);


const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf)