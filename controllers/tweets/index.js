//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Tweet = require("../../models/tweets")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  Tweet.find({username: req.session.username}, (err, tweets) => {
      if (err){
          console.log(err)
      } else {
          res.send(tweets)
      }
  })
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;