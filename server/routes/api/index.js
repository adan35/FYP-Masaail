let router = require("express").Router();

router.use("/user", require("./user"));
router.use("/post", require("./post"));
router.use("/upload", require("./upload"));

module.exports = router;
