import bcrypt from "bcrypt";
import User from "../models/User.js";

/* Register */
export const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: passwordHash,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

/* Login */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });

    if (!user) return res.status(400).json({ msg: "user does not exist. " });

    const validated = await bcrypt.compare(password, user.password);
    if (!validated)
      return res.status(400).json({ msg: "Invalid credentials." });

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
