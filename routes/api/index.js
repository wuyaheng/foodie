const path = require("path");
const router = require("express").Router();
const storeRoutes = require("./stores");


// Store routes
router.use("/store", storeRoutes);



router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;
