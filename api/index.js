require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from backend!" });
}

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
