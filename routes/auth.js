const passport = require('passport');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send("Hi");
    })

    app.get(
        '/api/auth/google', 
        passport.authenticate("google", {
            scope: ["profile", "email"]
        }),
    )

    app.get(
        '/api/auth/google/callback',
        passport.authenticate("google"),
        (req, res) => {
            res.redirect('/')
        }
    )
}