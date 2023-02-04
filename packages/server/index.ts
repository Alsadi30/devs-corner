require('dotenv').config()
const express = require('express')
const AppDataSource = require('./database/config')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json()
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
      console.log("database initialized successfully")
    })
    .catch((error) => console.log(error))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})