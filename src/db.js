// import {LocalStorage} from ('node-localstorage');
// export = new LocalStorage('./database');
const {LocalStorage} = require("node-localstorage")
module.exports = new LocalStorage("./database");