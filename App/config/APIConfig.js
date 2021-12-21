const API_HOST_NAME = "https://pharsathapa.com"
const API_VERSION = 'v3';
const API_BASE = API_HOST_NAME + '/api/' + API_VERSION;

const API_KEYS = {
    consumer_key : "ck_71271097945756064cc68480d14695e1838c6527",
    consumer_secret : "cs_98200e25d456a28510684c10255628c8a57b556a"
}

const API_ENDPOINTS = {
    categories : API_BASE + "/products/categories",
    products : API_BASE + "/products",
    test : API_BASE + "/contact/test"
};

const API_HEADERS = {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }

module.exports = { API_ENDPOINTS, API_HEADERS, API_VERSION, API_HOST_NAME, API_KEYS }