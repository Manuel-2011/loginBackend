const controller = require('./controller/controller.js')
const express = require('express')
const db = require('./models')
const app = express()
var morgan = require('morgan')
const router = require('./routes/routes.js')

app.use(morgan('dev'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width,Content-Type, Accept")
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// API ENDPOINTS
app.get('/api/users', (req, res) => {
    db.user.findAll().then(users => res.json(users))
})

// api/auth router
app.use('/api/auth', router)


app.get('/', (req, res) => {
    db.user.findAll().then(users => res.json(users))
})

const port = 3000
app.listen(port, () => {
    console.log(`Runnning on http://localhost:${port}`)
})

module.exports = app