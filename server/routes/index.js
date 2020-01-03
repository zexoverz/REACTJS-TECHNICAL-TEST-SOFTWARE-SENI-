const router = require(`express`).Router();
const RepoController = require('../controllers/RepoController');


router.get("/repos/:username", RepoController.findReposByUser);


module.exports = router;