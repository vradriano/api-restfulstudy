const express = require('express')
const app = express()


const db = require('./database/db')
const routes = require('./routes/routes')

db.connect()

// habilita server para receber dados via post(Formulário.)
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is working at port ${port}`))