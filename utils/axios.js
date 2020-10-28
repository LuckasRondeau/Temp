const axios = require("axios").default;
module.exports = axios.create({
    baseURL: "http://consultadealtapacientesdb.com"
});