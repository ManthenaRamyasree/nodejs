const express = require("express");
const app = express();

const User = require("../controllers/user");
const bcrypt = require('bcrypt');
const UserModel = require('../models/user')
const router = express.Router();

app.use(express.json());

const users = [
  {
    firstNme: "ramya",
    lastName: "sree",
    email: "ramya@gmail.com",
    password: "123456",
  },
  {
    firstNme: "hanvi",
    lastName: "sree",
    email: "hanvi@gmail.com",
    password: "123456789",
  },
];

router.get("/", (req, res) => {
  res.send("Hi");
});

router.post("/register", User.register);

// router.get("/users", (req, res) => {
//   res.status(200).json({ users: users });
// });
router.get('/users', async (req, res) => {
  try {
      const users = await UserModel.find({});
      res.json(users);
  } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find user by email in the database
      const user = await UserModel.findOne({ email });

      if (!user) {
          // If user with the provided email does not exist
          return res.status(401).json({ success: false, message: "Invalid username or password" });
      }

      // Compare hashed password from the database with the provided password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
          // If password does not match
          return res.status(401).json({ success: false, message: "Invalid password" });
      }

      // Authentication successful
      res.json({ success: true, message: "Login successful" });
  } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
  }
})

module.exports = router;
