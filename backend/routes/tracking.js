const router = require("express").Router()

let trackingDB = {}

router.post("/update", (req, res) => {
  const { code, status, location } = req.body

  trackingDB[code] = { status, location, time: Date.now() }

  res.json({ success: true })
})

router.get("/:code", (req, res) => {
  res.json(trackingDB[req.params.code] || {})
})

module.exports = router
