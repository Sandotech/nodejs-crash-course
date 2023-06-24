const fs = require('fs')
const path = require('path')

// Create folder 
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...')
// })

// Create and write file
// fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'Hello World!', err => {
//     if(err) throw err;
//     console.log('File writen to...')
// })

// File Append

// fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), 'I love Node.js', err => {
//     if(err) throw err;
//     console.log('File writen to...')
// })

// Read file 
// fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data)
// })

// Rename File
fs.rename(
    path.join(__dirname, '/test', 'Hello.txt'), 
    path.join(__dirname, '/test', 'HelloWorld.txt'),
    err => {
        if(err) throw err;
        console.log('File renamed..')
    })