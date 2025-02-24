const Profile = require("../models/Profile");
const Employee = require("../models/Employee");

exports.createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Employee.findById(req.params.id)
      .populate("profile")
      .select("_id firstName lastName dob profile");

    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ empId: req.params.id });

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    profile = await Profile.findByIdAndUpdate(profile._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(profile);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).send();
    }
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};
