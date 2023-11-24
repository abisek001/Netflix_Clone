const express = require("express");
const app = express();
const mongoose = require("mongoose");       // DB Driver
const routes = require("./Routes/index");   // Routing file

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace with your client's origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', routes);  // transfering all the requests to routes
const port = 5500;
const hostName = 'localhost';

const atlasDbUrl = 'mongodb+srv://abisek501:7TVG2K0IxHG0wTsE@cluster0.5rzfnfi.mongodb.net/Video-Streaming?retryWrites=true&w=majority'  // MongoDb Atlas Connection

mongoose.connect(atlasDbUrl,{useNewUrlParser: true, useUnifiedTopology: true})

.then( res => {
    app.listen(port, hostName, () => {
        console.log(`Server is running at ${hostName}:${port}`)
    });
})
.catch( err => console.log(err) );