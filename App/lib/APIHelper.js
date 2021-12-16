var { API_ENDPOINTS, API_HEADERS, API_VERSION, API_HOST_NAME, API_KEYS } = require("../config/APIConfig");

var WooCommerceAPI = require('react-native-woocommerce-api');

WooCommerceAPI = new WooCommerceAPI({
    url: API_HOST_NAME,
    ssl: false,
    consumerKey: API_KEYS.consumer_key,
    consumerSecret: API_KEYS.consumer_secret,
    wpAPI: true,
    version: 'wc/' + API_VERSION,
    queryStringAuth: true
});

module.exports = WooCommerceAPI;
