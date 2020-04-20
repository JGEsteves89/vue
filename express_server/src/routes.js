module.exports = {
    setup: function (app) {
        // simple inpoint route for get request to a status inpoint.
        app.post('/register', (req, res) =>{
            res.send({
                message: `Hello ${req.body.email} thank you for comming!`
            })
        })
        // simple inpoint route for get request to a status inpoint.
        app.get('/9gag', (req, res) =>{
            gagServices.fetch_9gag_data().then(data => res.send(data))
        })
    }
};