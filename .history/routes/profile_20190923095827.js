
const express = require('express');
const router = express.Router();

router.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
    console.log(req.params.platform, req. params.gamertag);
    res.send('Hello');
});
