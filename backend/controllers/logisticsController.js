exports.createDebitNote = (req, res) => {
  const { company, items } = req.body

  const trackingCode = "TRK-" + Date.now()

  res.json({
    trackingCode,
    company,
    items,
    status: "issued",
    generatedAt: new Date()
  })
}
