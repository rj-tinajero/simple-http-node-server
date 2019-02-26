const http = require('http');
const port = 3000;
const fs = require('fs');

//handles HTTP requests
const requestHandler = (req, res) => {


    fs.writeFileSync('hello-world.txt', 'Hello to this great world', 'utf8');

    fs.readFile('hello-world.txt', 'utf8', function (err, data) {
        if(err) {
            return console.log(err);
        }
        console.log(data);
    });

    res.end(`Handling a request on port ${port}`);
};

//Create a server and pass in the requestHandler function
const server = http.createServer(requestHandler);

//Start the server listening on port 3000
server.listen(port, (err) => {
    if(err) {
        return console.log(`You have an error: ${err}`);
    }
    console.log(`server is listening on ${port}`);
});

