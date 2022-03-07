import Express from "express";
const app = Express()

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello World!</h1>
    `)
})

export function startServer(port = 3100){
    app.listen(port, () => {
        console.log(`Api listening on port ${port}`)
    })
}