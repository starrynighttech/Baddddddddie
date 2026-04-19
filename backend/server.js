const express = require("express")
const http = require("http")
const socketIo = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketIo(server, { cors: { origin: "*" } })

app.use(express.json())

app.set("io", io)

app.use("/api/auth", require("./routes/auth"))
app.use("/api/shake", require("./routes/shake"))
app.use("/api/wallet", require("./routes/wallet"))
app.use("/api/ads", require("./routes/ads"))
app.use("/api/logistics", require("./routes/logistics"))
app.use("/api/tracking", require("./routes/tracking"))

io.on("connection", socket => {
  console.log("User connected", socket.id)
})

server.listen(3000, () => console.log("Backend running on 3000"))
