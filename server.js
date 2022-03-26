const express = require('express')
const customerRouter = require('./customer/router.js')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.static('public'))
app.use('/customer', customerRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

module.exports = app