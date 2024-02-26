import User from "../Models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// register a user
export const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = bcrypt.hashSync(req.body.password, salt);
    const user = await User({
      username: req.body.username,
      email: req.body.email,
      password: hashpassword,
      phone: req.body.phone,
      country: req.body.country,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
// login a user
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json("user dose not exit");
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      res.status(404).json("wrong password");
    }
    const token = jwt.sign({ userId: user._id }, "Shawil12345!");

    res.cookie('access-token',token,{ httpOnly: true})
    .status(200).json("user login succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
};
