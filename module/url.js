const url = require('url');
let legercy = url.parse("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
console.log(legercy);


let whatwg = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");//이방식으로 기억하자
console.log(whatwg);
console.log(whatwg.searchParams.get('query'));