"use strict";
const fetch = require("node-fetch");

const fetchData = () => {
    return fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
        .then(responce => responce.json())
        .then(commits => commits[0].author.site_admin)
};

fetchData().then(data => console.log('1--->', data));

module.exports.fetchData = fetchData;