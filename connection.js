//import mongoose 
const mongoose = require('mongoose')

connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log(`Mongodb connected successsfully`);
}).catch((err) => {
    console.log(`Mongodb connection failed due to ${err}`);
})