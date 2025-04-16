require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('<h1>this is testing page</h1>')
})
app.get('/pg', (req, res) => {
    res.send('hiii')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("this is changes");
console.log("this is second main branch changes");
