const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const articleRoute = require('./routes/article.js')
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then((e) => console.log('server Mongo berjalan'))
    .catch((err) => console.log('err'))

app.use(cors())
app.use('/api/article',articleRoute)




// app.route('/').get((req,res) => {
//     console.log('route');
// })

app.listen(3000, () => {
    console.log("Server Akitf");
})