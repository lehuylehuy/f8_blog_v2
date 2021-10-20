const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("<h1>Hey huy</h1>"))

app.listen(port, () => console.log("hello, i'm listening at: ", port));