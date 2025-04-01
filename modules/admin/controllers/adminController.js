const adminService = require("../services/adminService");

// Lấy danh sách tất cả Admin
const getAllAdmin = async (req, res) => {
  try {
    const admins = await adminService.getAllAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách Admin", error });
  }
};

// Lấy thông tin Admin theo ID
const getAdminById = async (req, res) => {
  try {
    const admin = await adminService.getAdminById(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin không tồn tại" });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy Admin", error });
  }
};

// Tạo Admin mới
const createAdmin = async (req, res) => {
  try {
    const newAdmin = await adminService.createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tạo Admin", error });
  }
};

// Cập nhật Admin
const updateAdminById = async (req, res) => {
  try {
    const updatedAdmin = await adminService.updateAdmin(req.params.id, req.body);
    if (!updatedAdmin) return res.status(404).json({ message: "Admin không tồn tại" });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật Admin", error });
  }
};

module.exports = {
  getAllAdmin,
  getAdminById,
  createAdmin,
  updateAdminById,
};
