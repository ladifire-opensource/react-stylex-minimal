const express = require("express");
const http = require("http");

const server = express();

server.use(express.static(__dirname + "/dist"));

server.get("*", (request, response) => {
    response.sendFile(__dirname + "/dist/index.html");
});

const app = http.createServer(server);

app.listen("5556", (error) => {
    if (error) throw error;

    console.log("App running at: 5556");
});
