process.emitWarning('Something happened!', {
    code: 'MY_WARNING',
    detail: 'This is some additional information'
});

/*
(node:16152) [MY_WARNING] Warning: Something happened!
This is some additional information
*/

process.on('warning', (warning) => {
    console.log(warning)
    // console.warn(warning.name);    // 'Warning'
    // console.warn(warning.message); // 'Something happened!'
    // console.warn(warning.code);    // 'MY_WARNING'
    // console.warn(warning.stack);   // Stack trace
    // console.warn(warning.detail);  // 'This is some additional information'
});