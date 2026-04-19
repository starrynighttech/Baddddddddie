const router = require("express").Router()
const User = require("../models/User")

router.post("/add", async (req, res) => {
  const { userId, amount } = req.body

  const user = await User.findById(userId)
  user.balance += amount
  await user.save()

  res.json({ success: true, balance: user.balance })
})

module.exports = router
