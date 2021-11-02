const express = require('express')
const cors = require('cors')
const app = express()


const db = require('./database/db')
const routes = require('./routes/routes')

db.connect()

const allowedOrigins = [
  'http://192.168.43.100:5500',
  'http://www.google.com.br',
]

app.use(cors({
  origin: function(origin, callback){
    let allowed = true

    if (!origin) allowed = true

    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))


//habilita server para receber dados json
app.use(express.json())


app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is working at port ${port}`))