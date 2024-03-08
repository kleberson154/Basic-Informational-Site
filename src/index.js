var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/contact', (req, res) => {
  res.send('Contact Me')
})

app.get('/404', (req, res) => {
  res.sendStatus(404)
})

app.listen(8080, (req, res) => {
  console.log('o servidor esta escutando')
})
