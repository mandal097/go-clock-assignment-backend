const router = require("express").Router();


//this is only of testing purpose 
router.get('/test', (req, res) => {
    res.json({
        status: "success",
        message: "your on test route"
    })
});

module.exports = router;