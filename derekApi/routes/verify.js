const express = require("express");
const authMiddleware = require("../middleware/auth");
const messagebird = require("messagebird")("BP8597PUJ0NoQeCrSed7AljoN");

const router = express.Router();

router.post("/send", async (req, res) => {
  // console.log(req.body);
  messagebird.verify.create(
    `${req.body.number}`,
    {
      template: "Your token is %token."
    },
    (err, response) => {
      if (err) {
        console.error("err");
        console.error(err);
        res.send("ok");
      } else {
        res.json({ id: response.id });
      }
    }
  );
});

router.post(
  "/confirm",
  async (req, res, next) => {
    // var code = req.body.id;
    const token = req.body.token;
    const id = req.body.state.token;
    messagebird.verify.verify(id, token, (err, response) => {
      if (err) {
        console.log("err");
        console.log(err);
      } else {
        const firstName = req.body.state.firstName;
        const lastName = req.body.state.lastName;
        const email = req.body.state.email;
        const password = req.body.state.password;

        const user = new User({ email: email });
        User.register(user, password, async error => {
          if (error) {
            console.error(error);
            next(error);
            return;
          }
          req.user = user;
          await global.Personal.create({
            userID: user._id,
            firstName: firstName,
            lastName: lastName
          });

          next();
        });

        // console.log(response);
      }
    });
  },
  authMiddleware.signTokenHandler
);

module.exports = router;
