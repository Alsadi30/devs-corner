import { Request, Response } from "express"

require('dotenv').config()
const express = require('express')
const AppDataSource = require('./config/database')
const app = express()
const port = 3000

app.get('/', (req:Request , res:Response) => {
  res.send('ok')
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