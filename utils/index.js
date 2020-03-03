/* Additional display information for your Stripe Products 
 * subheader - string representing appealing product description
 */
const PRODUCT_INFO = {
  'Fast Forms': {
    subheader: 'The quickest way to start collecting customer feedback on your website',
  },
};


/* Additional display information for your Stripe Plans
 * features - array of features specific to plan
 * highlight - boolean specifying whether plan should be highlighted
 */
const PLAN_INFO = {
  Lite: {
    features: [
      'Collect up to 500 responses per month',
      'Customized templates',
      'Export responses to Google Sheets',
    ],
    highlight: false,
  },
  Pro: {
    features: [
      'Unlimited amount of responses per month',
      'Customized templates',
      'Invite team members',
      `Export responses to a variety of platforms,
      including Google Sheets, Airtable, Hubspot,
      etc.`,
    ],
    highlight: true,
  }
};


/**
 * One level deep version of Lodash's 'get' function: https://lodash.com/docs/4.17.15#get
 * @param {Object} obj
 * @param {string} property A key we expect to be present in "obj"
 * @param {*} defaultValue If "obj" or "obj[key]" are undefined, return this default value
 * @return {*} Value at obj[key] if defined, otherwise "defaultValue"
 */
function getValue(obj, property, defaultValue) {
  return obj && obj[property] ? obj[property] : defaultValue;
}


/**
 * @param {number} stripeAmount The price in cents
 * @return {string} The price represented as a formatted USD string ($X.YZ)
 */
function formatUSD(stripeAmount) {
  return `$${(stripeAmount / 100).toFixed(2)}`;
}


/**
 * @param {string} USDString The price represented as a formatted USD string ($X.YZ)
 * @return {number} The price in cents
 */
function formatStripeAmount(USDString) {
  return parseFloat(USDString) * 100;
}


module.exports = {
  PRODUCT_INFO,
  PLAN_INFO,
  getValue,
  formatUSD,
  formatStripeAmount
};
