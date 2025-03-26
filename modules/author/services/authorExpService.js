const AuthorExp = require("../../../models/authors/authorExpModel");
const AuthorTaskService = require("./authorTaskService");

// Tự động tạo khi có User có role là Author
const createAuthorExp = async (userId) => {
  const existingExp = await AuthorExp.findOne({ idUser: userId });
  if (!existingExp) {
    const authorExp = await AuthorExp.create({ idUser: userId });

    await AuthorTaskService.createAuthorTask(authorExp._id);
    console.log("AuthorExp và AuthorTask đã được tạo!");
  } else {
    console.log("AuthorExp đã tồn tại, không tạo lại!");
  }
};

// Xóa AuthorExp (kèm theo AuthorTask)
const deleteAuthorExp = async (userId) => {
  try {
    const authorExp = await AuthorExp.findOne({ idUser: userId });
    if (authorExp) {
      await AuthorExp.deleteOne({ idUser: userId });
      console.log("🗑️ AuthorExp đã bị xóa!");

      // Xóa nhiệm vụ của tác giả liên quan
      await AuthorTaskService.deleteAuthorTask(authorExp._id);
    }
  } catch (error) {
    throw new Error("🔥 Lỗi khi xóa AuthorExp: " + error.message);
  }
};

// Lấy tất cả AuthorExp
const getAllAuthorExp = async () => {
  return await AuthorExp.find()
    .populate("idUser", "username email")
    .populate("idAuthorTask");
};

// Lấy thông tin Exp của một Author theo ID
const getAuthorExpById = async (id) => {
  return await AuthorExp.findById(id)
    .populate("idUser", "username email")
    .populate("idAuthorTask");
};

// Cộng Exp tự động khi hoàn thành nhiệm vụ
const addExpForAuthor = async (idUser, idAuthorTask, expEarned) => {
  const authorExp = await AuthorExp.findOne({ idUser });

  if (authorExp) {
    authorExp.totalExp += expEarned;

    // Cập nhật level nếu đủ điều kiện
    if (authorExp.totalExp >= 100) {
      authorExp.level += 1;
    }

    return await authorExp.save();
  } else {
    return await AuthorExp.create({ idUser, idAuthorTask, totalExp: expEarned, level: 1 });
  }
};

// Xuất tất cả các hàm
module.exports = {
  createAuthorExp,
  deleteAuthorExp,
  getAllAuthorExp,
  getAuthorExpById,
  addExpForAuthor,
};
