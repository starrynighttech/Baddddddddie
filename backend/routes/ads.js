const router = require("express").Router()

let ads = [
  { id: 1, title: "Watch & Earn", reward: 0.5 },
  { id: 2, title: "Refer Friends", reward: 2 }
]

router.get("/", (req, res) => {
  res.json(ads)
})

module.exports = router
