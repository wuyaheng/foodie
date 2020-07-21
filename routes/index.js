const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")

// API Routes
router.use("/api", apiRoutes);


// If no API route is hit, send the react app
router.use((req, res) => 
    res.sendFile(path.join(__dirname, "../client/build/index.js"))    
)

module.exports = router;