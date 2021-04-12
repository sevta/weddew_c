const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

app.get('/getJSON', (req, res) => {
  res.send({
    message: 'hello world',
  })
})

app.post('/auth/register', (req, res) => {
  console.log('register')
  const { username, email, password } = req.body
  console.log({
    username,
    email,
    password,
  })
})

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body
  console.log({ username, password })
})

module.exports = app
