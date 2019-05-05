const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  // Get logged in user’s details
  // .get((req, res) => {
  //     res.json({ hello: "hai" })
  // })

  .get(authMiddleware.authenticateJWT, (req, res) => {
    if (req.user) {
      res.json({ user: req.user });
    } else {
      res.status(401).json({ error: "Please sign in" });
    }
  })
  // Sign in
  .post(authMiddleware.authenticateSignIn, authMiddleware.signTokenHandler);
// Sign in
router.post("/test", authMiddleware.authenticateJWT, (req, res) => {
  res.send("hello");
});
// Register
router.post(
  "/register",
  authMiddleware.register,
  authMiddleware.signTokenHandler
);

// Mainly for dev
router.delete("/collection", authMiddleware.dropCollection);

module.exports = router;
