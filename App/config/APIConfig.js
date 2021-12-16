const API_HOST_NAME = "http://localhost/wordpress"
const API_VERSION = 'v3';
const API_BASE = API_HOST_NAME + '/api/' + API_VERSION;

const API_KEYS = {
    consumer_key : "ck_29c3e5c67805a0f0c57f6dc094acbc342ea579d3",
    consumer_secret : "cs_d2199829d332a75f0e940ee42eb9daaa3fc86ec5"
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