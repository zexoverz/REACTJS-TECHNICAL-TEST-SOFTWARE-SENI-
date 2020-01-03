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

    static findReposByUser(req,res,next){
        github({
            method: "get",
            url: `/users/${req.params.username}/repos`,
        }).then(({
            data
        }) => {
            res.status(200).json(data);
        }).catch((err) => {
            next(err);
        })
    }


}

module.exports = RepoController;