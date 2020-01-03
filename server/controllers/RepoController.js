const axios = require("axios");
require("dotenv").config();

// instance github 

const github = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {
        Authorization: `token ${process.env.GIT_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json"
    }
});

class RepoController {

    static findReposByUser(){

    }


}

module.exports = RepoController;