const userService = require("../services/userService");

//Xử lý login (Nhận email và password từ req đưa sang service xử lý logic)
const loginUser = async (req,res) =>{
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);

    res.status(200).json({ token });
} catch (error) {
    res.status(400).json({ message: error.message });
}};

// Lấy danh sách User
const getUser = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

// Thêm User mới
const addUser = async (req, res) => {
  try {
    const newUser = await userService.addUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm user", error });
  }
};

// Xóa User theo ID
const deleteUserById = async (req, res) => {
  try {
    await userService.deleteUserById(req.params.id);
    res.status(200).json({ message: "Xóa user thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa user", error });
  }
};

// Cập nhật User theo ID
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật user", error });
  }
};

module.exports = {
  loginUser,
  getUser,
  addUser,
  deleteUserById,
  updateUserById,
};
