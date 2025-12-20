//import dotenv
require(`dotenv`).config()

//import express
const express = require(`express`)

//import cors
const cors = require(`cors`)

//import router
const router = require(`./router`)

//import connection
require(`./connection`)

//create server
const rsServer = express()

//tell server to use cors
rsServer.use(cors())

//tell server to use express.json
rsServer.use(express.json())

//tell server to use router
rsServer.use(router)

//set port for the server
const PORT = 4000 || process.env.PORT

//make the server listen to that port
rsServer.listen(PORT, () => {
    console.log(`Server running successfully at port:${PORT}`);
})

//check the request
rsServer.get(`/`, (req, res) => {
    res.send(`Get request recieved`)
})

