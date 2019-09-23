
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:platform/:gamertag', async (req, res) => {

    try {
        const headers = {
            'TRN-API-KEY': process.env.TRACKER_API_KEY
        }
        const {platform, gamertag} = req.params;

        const response = await fetch(`${process.env.TRACKER_API_URL}`);
    } catch (error) {
        
    }



});


module.exports = router;