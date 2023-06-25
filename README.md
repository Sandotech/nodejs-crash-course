# node crash course

**See the deploy here -->**  

## **fs**

The `fs` module in Node.js provides a way to interact with the file system. It allows you to read, write, and create files, as well as list the contents of directories.

Here are some examples of how to use the `fs` module:

**Code snippet**

```
// Read a file
const fs = require('fs');
const data = fs.readFileSync('myfile.txt');

// Write a file
fs.writeFileSync('myfile.txt', 'This is my file content');

// List the contents of a directory
const directories = fs.readdirSync('mydirectory');

```

**Use code with caution. [Learn more](https://bard.google.com/faq#coding)content_copy**

## **http**

The `http` module in Node.js provides a way to create and interact with HTTP servers and clients. It allows you to send and receive HTTP requests and responses.

Here are some examples of how to use the `http` module:

**Code snippet**

```
// Create a simple HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!');
});
server.listen(8080);

// Send an HTTP request
const http = require('http');
const request = http.request('http://localhost:8080', (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
  console.log(res.body);
});
request.end();

```

**Use code with caution. [Learn more](https://bard.google.com/faq#coding)content_copy**

## **path**

The `path` module in Node.js provides a way to manipulate file paths. It allows you to get the absolute path of a file, split a path into its components, and join multiple paths together.

Here are some examples of how to use the `path` module:

**Code snippet**

```
// Get the absolute path of a file
const path = require('path');
const filePath = path.join(__dirname, 'myfile.txt');

// Split a path into its components
const components = path.parse(filePath);

// Join multiple paths together
const newPath = path.join(components.dir, components.name);

```

**Use code with caution. [Learn more](https://bard.google.com/faq#coding)content_copy**

## **url**

The `url` module in Node.js provides a way to parse and manipulate URLs. It allows you to get the components of a URL, such as the host, port, and path, and to create new URLs.

Here are some examples of how to use the `url` module:

**Code snippet**

```
// Parse a URL
const url = require('url');
const parsedUrl = url.parse('http://www.example.com/path/to/file');

// Get the components of a URL
const host = parsedUrl.host;
const port = parsedUrl.port;
const path = parsedUrl.path;

// Create a new URL
const newUrl = url.format({
  host: 'www.example.com',
  port: 8080,
  path: '/new/path'
});

```

**Use code with caution. [Learn more](https://bard.google.com/faq#coding)content_copy**

## **os**

The `os` module in Node.js provides a way to interact with the operating system. It allows you to get the current operating system, get the user's home directory, and run system commands.

Here are some examples of how to use the `os` module:

**Code snippet**

```
// Get the current operating system
const os = require('os');
const osName = os.name;

// Get the user's home directory
const homeDir = os.homedir();

// Run a system command
const os = require('os');
const result = os.system('ls -l');

```

**Use code with caution. [Learn more](https://bard.google.com/faq#coding)content_copy**

## **events**

The `events` module in Node.js provides a way to listen for and emit events. Events are a way for different parts of your code to communicate with each other.

Here are some examples of how to use the `events` module:

**Code snippet**

```
// Listen for an event
const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('myevent', () => {
  console.log('My event was emitted!');
});

// Emit an event
emitter.emit('myevent');
```