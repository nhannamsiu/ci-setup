"use strict"
const express = require('express')
const Web3 = require('web3')

let app = express()
const port = 8080

app.listen(port, async() => {
  console.log(`Server listening on port ${port}!`)
  console.log('Web3 version:',Web3.version)
})

app.get('/', (req,res)=>{
  res.send("Server is running")
})
