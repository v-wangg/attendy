const passport = require('passport');
const keys = require('../config/keys');

module.exports = app => {
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
            res.redirect(keys.CLIENT_ROOT_URL)
        }
    )

    app.get('/api/auth/current-user', (req, res) => {
        res.send(req.user);
    })

    app.get("/api/auth/sign-out", (req, res) => {
        req.logout();
        res.redirect(keys.CLIENT_ROOT_URL)
    });
}