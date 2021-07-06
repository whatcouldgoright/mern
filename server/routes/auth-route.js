const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID)

const router = require('express').Router();

const User = require('../models/User');

router.post("/google", async (req, res) => {
  const { token }  = req.body
  console.log('token: ' + JSON.stringify(token, null, 2))
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_AUTH_CLIENT_ID
    });

    const { name, email, picture } = ticket.getPayload();
  
    var query = {'email': email};
    var update = {'name': name, 'lastLogin': new Date()}
    
    User.findOneAndUpdate(query, update, {upsert: true}, function(err, user) {
        if (err) {
          res.status(500)
          res.json('Failed to initialise use profile: ' + err)
        } else {
          res.status(200)
          res.json(user)
        }
    });

  } catch(err) {
    res.status(500)
    res.json('Failed to authenticate using Google OAuth: ' + err)
    return;
  }
  
})

module.exports = router;