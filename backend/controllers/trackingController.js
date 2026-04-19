let db = {}

exports.updateTracking = (req, res) => {
  const { code, status, location } = req.body

  db[code] = { status, location, time: Date.now() }

  res.json({ success: true })
}

exports.getTracking = (req, res) => {
  res.json(db[req.params.code] || {})
}
