const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    const dummydata = ['central perk', 'purple apt'];
    res.status(200).json(dummydata)
})

module.exports = router