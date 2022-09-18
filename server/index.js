const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const articleRoute = require('./routes/article.js')
const categoryRoute = require('./routes/categories.js')
dotenv.config()

mongoose
    .connect("mongodb://127.0.1:27017/blog")
    .then((e) => console.log('server Mongo berjalan'))
    .catch((err) => console.log(err))

    
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use('/api/article',articleRoute)
app.use('/api/categories',categoryRoute)



// app.route('/').get((req,res) => {
//     console.log('route');
// })

app.listen(3000, () => {
    console.log("Server Akitf");
})