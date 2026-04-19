require("dotenv").config()
const http = require("http")
const app = require("./src/app")
const connectDB = require("./src/config/db")
const initSockets = require("./src/sockets")

const server = http.createServer(app)

connectDB()
initSockets(server)

server.listen(process.env.PORT, () =>
  console.log("🚀 Enterprise Backend running")
)
