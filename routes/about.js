const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.render('view/about');
});

module.exports = router