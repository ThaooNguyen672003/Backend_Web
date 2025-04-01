const Admin = require("../../../models/admins/adminModel");
const bcrypt = require("bcryptjs");

// Lấy danh sách Admin
const getAllAdmins = async () => {
  return await Admin.find();
};

// Lấy Admin theo ID
const getAdminById = async (id) => {
  return await Admin.findById(id);
};

// Tạo Admin mới
const createAdmin = async ({ username, email, password, gender }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = new Admin({ username, email, password: hashedPassword, gender });
  return await newAdmin.save();
};

// Cập nhật Admin
const updateAdmin = async (id, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return await Admin.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  getAllAdmins,
  getAdminById,
  createAdmin,
  updateAdmin,
};
