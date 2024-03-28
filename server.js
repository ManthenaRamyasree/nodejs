// // fileName : server.js 
// // Example using the http module
// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Set the response headers
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     // Write the response content
//     res.write('<h1>Hello, Node.js HTTP Server!</h1>');
//     res.end();
// });

// // Specify the port to listen on
// const port = 3300;

// // Start the server
// server.listen(port, () => {
//     console.log(`Node.js HTTP server is running on port ${port}`);
// });
// // Example using Express.js
// const express = require('express');
// const app = express();

// // Example defining a route in Express
// app.get('/users', (req, res) => {
//     return res.send('GET HTTP method on user resource');
//   });
  
// // Example specifying the port and starting the server
// const port = process.env.PORT || 3300; // You can use environment variables for port configuration
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// const express = require('express');
// const app = express();
// const PORT = 3300;
// const userRoute = require('./routes/user')
// // Middleware to parse JSON body
// app.use(express.json());

// app.use(userRoute)


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// app.js

const express = require('express');
const app = express();
const PORT = 3300;
const userRouter = require('./routes/user')
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/mytest'

mongoose.connect(mongoDB,
        console.log('mangodb is connected')
    )


app.use(express.json());

//user api usage

app.use(userRouter)


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


