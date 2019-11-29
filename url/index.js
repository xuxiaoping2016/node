const myURL =
  new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.searchParams.get("query"));
// const ret = {
//     href:
//      'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash',
//     origin: 'https://sub.host.com:8080',
//     protocol: 'https:',
//     username: 'user',
//     password: 'pass',
//     host: 'sub.host.com:8080',
//     hostname: 'sub.host.com',
//     port: '8080',
//     pathname: '/p/a/t/h',
//     search: '?query=string',
//     searchParams: URLSearchParams { 'query' => 'string' },
//     hash: '#hash' 
//   }


const myURL2 = new URL('/foo', 'https://example.org/');
// console.log(myURL2)

// const myURL3 = new URL({ toString: () => 'https://example.org/' });
// console.log(myURL3)