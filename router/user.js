const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
    res.send({
        user:"Ti Nguyen"
    })
})

module.exports = router