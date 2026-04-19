let pool = []

module.exports = (server) => {
  const io = require("socket.io")(server, {
    cors: { origin: "*" }
  })

  io.on("connection", (socket) => {

    socket.on("shake", (data) => {
      const now = Date.now()

      pool = pool.filter(u => now - u.time < 8000)

      const match = pool.find(u =>
        Math.abs(u.lat - data.lat) < 0.01 &&
        Math.abs(u.lng - data.lng) < 0.01
      )

      if (match) {
        io.emit("match", {
          users: [data.userId, match.userId]
        })

        pool = pool.filter(u => u.userId !== match.userId)
      } else {
        pool.push({ ...data, time: now })
      }
    })
  })
}
