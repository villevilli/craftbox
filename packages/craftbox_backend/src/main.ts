import express from "express";
const app = express()
const port = 3100

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})