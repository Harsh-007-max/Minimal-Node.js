const express = require("express");
const router = express.Router();
const User = require("../models/User");

const getAllRecords = async (req, res) => {
  const Users = await User.find({}).sort({ UserID: 1 });
  res.send(Users);
};
const getByID = async (req, res) => {
  const UserID = req.params.id;
  const Response = await User.findOne({ UserID: UserID });
  res.send(Response ? Response : { Error: "User Not Found" });
};
const addUser = async (req, res) => {
  const body = req.body;
  const lastUser = await User.find().sort({ UserID: -1 }).limit(1);
  if (lastUser.length > 0) {
    body.UserID = lastUser[0].UserID + 1;
  } else {
    body.UserID = 1;
  }
  const New_User = await User.create(body);
  res.send(New_User);
};

const updateUser = async (req, res) => {
  const UserID = req.params.id;
  const UpdatedData = req.body;
  const update = {
    Name: UpdatedData.Name,
  };
  const updatedUser = await User.updateOne({ UserID: UserID }, update);
  res.send(updatedUser);
};

const removeUser = async (req, res) => {
  const UserID = req.params.id;
  const Acknowledgement = await User.deleteOne({ UserID: UserID });
  res.send(Acknowledgement);
};

router.get("/", getAllRecords);
router.get("/:id", getByID);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);

module.exports = router;
