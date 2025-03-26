const User = require("../../../models/users/userModel");
const ReaderExpService = require("../../reader/services/readerExpService");
const AuthorExpService = require("../../author/services/authorExpService");

//Xử lý logic login (Kiểm tra thông tin, tạo token khi login success)
const loginUser = async (email, password) => {
  const emailUser = await User.findOne({ email });
  if (!emailUser) throw new Error("Email không chính xác hoặc không tồn tại!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Mật khẩu không đúng!");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" }); //Tạo token JWT
  return token;
};

// Lấy danh sách User
const getUsers = async () => {
  return await User.find({});
};

// Thêm User mới
const addUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("Email đã tồn tại");
    }
    const newUser = new User(userData);
    await newUser.save();

    await ReaderExpService.createReaderExp(newUser._id); //Tạo ReaderExp khi tạo User mới

    return newUser;
  } catch (error) {
    throw error;
  }
};

// Xóa User theo ID (xóa luôn ReaderExp và AuthorExp nếu có)
const deleteUserById = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      await ReaderExpService.deleteReaderExp(id); // Xóa ReaderExp liên quan
      await AuthorExpService.deleteAuthorExp(id); // Xóa AuthorExp liên quan
      console.log(`🗑️ User ${id} và dữ liệu liên quan đã bị xóa.`);
    }
    return user;
  } catch (error) {
    throw error;
  }
};

// Cập nhật User theo ID
const updateUserById = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });

  if (!user) {
    throw new Error("User không tồn tại");
  }

  // Kiểm tra nếu user mới được cập nhật có role là "author"
  if (user.role === "author") {
    await AuthorExpService.createAuthorExp(id);
    console.log("Đã kiểm tra và tạo AuthorExp nếu chưa có!");
  }

  return user;
};

module.exports = {
  loginUser,
  getUsers,
  addUser,
  deleteUserById,
  updateUserById,
};
