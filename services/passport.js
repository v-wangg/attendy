const passport = require('passport');
const keys = require('../config/keys.js');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose'); 

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: `${keys.SERVER_ROOT_URL}/api/auth/google/callback`,
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleID: profile.id });

        if (existingUser) {
            return done(null, existingUser);
        }
        console.log(profile);
        const savedUser = await new User({ googleID: profile.id, name: profile.displayName }).save();
        done(null, savedUser);
    })
);

