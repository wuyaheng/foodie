const router = require("express").Router();
const storeController = require("../../controllers/storeController");


// Matches with /api/stores
router.route("/")
    .get(storeController.findAll)
    .post(storeController.create);

// Matches with /api/stores/:id
router.route("/:id")
    .get(storeController.findById)
    .put(storeController.update)
    .delete(storeController.remove);


module.exports = router;