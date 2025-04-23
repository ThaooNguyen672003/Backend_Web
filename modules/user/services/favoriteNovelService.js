const FavoriteNovel = require("../../../models/users/favoriteNovelModel");

//Tạo khi chưa có và xóa khi có rồi
const toggleFavorite = async (idUser, idNovel) => {
  const existing = await FavoriteNovel.findOne({ idUser, idNovel });

  if (existing) {
    await FavoriteNovel.deleteOne({ _id: existing._id });
    return { message: "Đã xóa khỏi danh sách yêu thích" };
  }

  const newFavorite = new FavoriteNovel({ idUser, idNovel });
  await newFavorite.save();
  return { message: "Đã thêm vào danh sách yêu thích", data: newFavorite };
};

// Lấy danh sách yêu thích theo idUser
const getFavoritesByUser = async (idUser) => {
  return FavoriteNovel.find({ idUser }).populate({
    path: "idNovel",
    select: "title description view imageUrl rate",
  });
};

module.exports = {
  toggleFavorite,
  getFavoritesByUser,
};
