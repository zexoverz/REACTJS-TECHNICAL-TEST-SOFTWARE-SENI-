const router = require(`express`).Router();


router.get("/repos/:username", RepoController.findReposByUser);


module.exports = router;