const stripe = require('stripe')('sk_test_51JKywdEyBNY91bY3i5dOGGsiGLmiXtMRi0UkAC3LtJBfUje4XJ6rkwsjQ6fotkiB90ge12gZ4OG9DJMg2caC6CK000r8k4hZlL');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
});
const clientSecret = paymentIntent.client_secret



// whsec_gVJ1Gfs9N9pdUPE2tcPkRWeAARmQPC56