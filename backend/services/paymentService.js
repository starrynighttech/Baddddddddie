const stripe = require("stripe")(process.env.STRIPE_KEY)

async function createPayment(amount) {
  return await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "usd"
  })
}

module.exports = { createPayment }
