const express = require("express");
const app = express();
var cors = require("cors");

require("dotenv").config();

const { STRIPE_SECRET_KEY, CLIENT_URL } = process.env;
// @ts-ignore
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.get("/health", (req, res) => {
  res.status(200).send({
    status: "health",
  });
});

app.post("/create-checkout-session", async (req, res) => {
  console.log("Creating stripe checkout session");
  try {
    const productDetails = req.body;
    const lineItems = productDetails.map((p) => ({
      price_data: {
        // The currency parameter determines which
        // payment methods are used in the Checkout Session.
        currency: "aud",
        product_data: {
          name: p.title,
          description: p.description,
          images: [p.img],
        },
        unit_amount: p.price * 100,
      },
      quantity: p.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${CLIENT_URL}?success=true`,
      cancel_url: `${CLIENT_URL}?success=false`,
    });
    res.status(200).send(session);
  } catch (e) {
    res.status(500).send(`Something went wrong ${e}`);
    console.log("Error", e);
  }
});
app.listen(PORT, () =>
  console.log(`Server is live in http://localhost=:${PORT}`)
);
