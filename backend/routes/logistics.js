const router = require("express").Router()

router.post("/debit-note", (req, res) => {
  const { company, items } = req.body

  const trackingCode = "TRK-" + Date.now()

  res.json({
    company,
    trackingCode,
    items,
    status: "generated"
  })
})

module.exports = router
