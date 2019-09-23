app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
    console.log(req.params.platform, req. params.gamertag);
    res.send('Hello');
});
