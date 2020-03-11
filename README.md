# stripe-subscriptions-sca

This repository shows you how to use Node (version 8+) and Stripe to create recurring subscriptions with built-in SCA support. It is an updated version of [stripe-recurring-subscriptions](https://github.com/code-nebula/stripe-recurring-subscriptions).

It uses Express for creating a simple server, Nunjucks for templating, and the Stripe API.


## Tutorial 

We’ve written 2 detailed tutorials about this code on the 🌟 CodeNebula blog:

🌟[How to Set up a Basic Node Application with Stripe](https://codenebula.io/node.js/stripe/2020/03/03/how-to-set-up-a-basic-node-application-with-stripe/)

🌟[How to use Stripe’s new Payment Intents API with Node.js to create subscriptions with built-in SCA](https://codenebula.io/node.js/stripe/sca/2020/03/03/how-to-use-stripes-new-payment-intents-api-with-node-js-to-create-subscriptions-with-built-in-sca/)


## Instructions

1. Clone this repository
2. Run `npm install` to install all dependencies
3. Create a `.env` file to house your Stripe Secret Key (this repo includes `.env` in its `.gitignore`)
4. In the `.env` file, set your secret key as STRIPE_API_KEY (`STRIPE_API_KEY="sk_test_************************"`)
5. In the Javascript section of the `views/register.html` file, replace `var stripe = Stripe("pk_test_************************")` with your Stripe Publishable Key
6. Run the app via `npm run start`
7. Navigate to [localhost:3000](http://localhost:3000/)


## Demo Workflow

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aworkflow1.png)

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aworkflow2.png)

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aworkflow3.png)

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aworkflow4.png)

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aworkflow5.png)

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aworkflow6.png)


## What's changed from the last time we set up subscriptions

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Aold-subscription-way.png)

![](https://stripemadeeasy.s3.amazonaws.com/stripe-subscriptions-2020%3Anew-subscription-way.png)
