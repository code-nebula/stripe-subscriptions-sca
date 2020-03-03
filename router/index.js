const express = require('express');
const STRIPE_API = require('../api/stripe-functions');
var router = express.Router();

router.get('/', async (req, res) => {
  const products = await STRIPE_API.getProductsAndPlans();
  res.render('pricing.html', { products });
});


router.post('/register', (req, res) => {
  const plan = JSON.parse(req.body.plan);
  plan.formatted = req.body.plan;

  res.render('register.html', {
    productName: req.body.productName,
    plan,
  });
});


router.post('/handlePayment', async (req, res) => {
  const parsedPlan = JSON.parse(req.body.plan);

  const customerInfo = {
    name: req.body.name,
    email: req.body.email,
    planId: parsedPlan.id,
  };

  const subscription = await STRIPE_API.createCustomerAndSubscription(
    req.body.paymentMethodId,
    customerInfo,
  );

  return res.json({ subscription });
});

module.exports = router;
