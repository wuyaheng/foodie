const path = require("path");
const router = require("express").Router();
const storeRoutes = require("./stores");
const yelpRoutes = require("./yelp");

// Store routes
router.use("/store", storeRoutes);

// Yelp routes
router.use("/yelp", yelpRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;
