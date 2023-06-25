const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    // With fs
    if (req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content)
        })
    }
    if (req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content)
        })
    }
    // With an API
    if (req.url === '/api/team'){
        const employers = [
            {name: 'Diego Santos', age: 19, skill: 'Fullstack Developer'},
            {name: 'John Doe', age: 39, skill: 'Backend Developer'},
            {name: 'Juanita Perez', age: 23, skill: 'Frontend Developer'},
        ];
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(employers))        
    }
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))