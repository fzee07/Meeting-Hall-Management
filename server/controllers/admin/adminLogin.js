const Admin = require("../../models/Admin");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = Admin.findOne({ email: email });
  if (user) {
    res.status(404).json({
      success: false,
      message: "User Already Exists",
    });
  }else{
    user.create({ user})
  }
};

module.exports = { adminLogin };
