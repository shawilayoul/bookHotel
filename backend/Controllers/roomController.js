import Room from "../Models/roomModel.js";
export const createRoom = async (req, res) => {
  try {
    const newroom = await Room(req.body);
    await newroom.save();
    res.status(201).json(newroom);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getAllRoom = async (req, res) => {
  try {
    const allRoom = await Room.find();
    res.status(200).json(allRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getByIdRoom = async (req, res) => {
  const singlRomm = await Room.findById(req.params.id);
  res.status(200).json(singlRomm);
};
export const deleteRoom = async (req, res) => {
  await Room.findByIdAndDelete(req.params.id);
  res.status(200).json("the room us been deleted");
};
