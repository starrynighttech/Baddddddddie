const router = require("express").Router()

let pool = []

router.post("/", (req, res) => {
  const { userId, lat, lng } = req.body
  const io = req.app.get("io")

  const now = Date.now()
  pool = pool.filter(u => now - u.time < 8000)

  const match = pool.find(u =>
    Math.abs(u.lat - lat) < 0.01 &&
    Math.abs(u.lng - lng) < 0.01
  )

  if (match) {
    io.emit("match", { users: [userId, match.userId] })
    pool = pool.filter(u => u.userId !== match.userId)

    return res.json({ matched: true, partner: match.userId })
  }

  pool.push({ userId, lat, lng, time: now })

  res.json({ matched: false })
})

module.exports = router
