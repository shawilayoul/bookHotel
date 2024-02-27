import User from "../Models/authModel.js";
// update user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set: req.body, new: true})
    res.status(200).json(updatedUser) 
  } catch (error) {
    res.status(500).json(error);
  }
};
 //delete a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("user has been deleted");
  } catch (error) {
    res.status(500).json(error)
  }
};
// get single user
export const getUser = async (req, res) => {
    try {
        const singleUser = await User.findById(req.params.id)
        res.status(200).json(singleUser) 
    } catch (error) {
        res.status(500).json(error)
    }
};
 // gte all users
export const getAllUser = async (req ,res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json(error)
    }
};
