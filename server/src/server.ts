import express from 'express'
import './database/connection'
const app = express()
const port = 3333

app.use(express.json())

app.listen(port, () => {
    console.log("server running on port: " + port)
})

app.get('/user', (req, res) => {
    return res.json({ message: "Hello HAPPY" })
})