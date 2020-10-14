const router = require("express").Router();
const itemRoutes = require("./items")
//const apiRoutes = require("./api");

// API Routes
//router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("/items", itemRoutes);

module.exports = router;