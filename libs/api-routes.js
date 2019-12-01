const express = require('express');
const router = express.Router();

router.get('/status', function (req, res) {
    res.json({ status: true });
});

module.exports = router;