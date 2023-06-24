const url = require('url');

const myUrl = new URL('https://github.com/Sandotech')

// Serialized URL 
console.log(myUrl.href);
// ||
// console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname
// this does not get port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Param
myUrl.searchParams.append('edn', '1 repo');
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));