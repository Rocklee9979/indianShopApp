var { API_ENDPOINTS, API_HEADERS, API_VERSION, API_HOSTNAME, API_KEYS } = require("../config/APIConfig");
var WooCommerceAPI = require('react-native-woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: API_HOSTNAME,
  consumerKey: API_KEYS.consumerKey,
  consumerSecret: API_KEYS.consumerSecret,
  wpAPI: true,
  version: 'wc/' + API_VERSION
});

module.exports = {
	make_API_call : function(api_url, method, params){
        WooCommerce.getAsync(api_url).then(function(result) {
              var json = JSON.parse(result.body);
              console.log(json);
              return result;
	    })
	}
}