const favoriteNovelService = require("../services/favoriteNovelService");

// Toggle yêu thích
const toggleFavorite = async (req, res) => {
  try {
    const { idUser, idNovel } = req.body;
    const result = await favoriteNovelService.toggleFavorite(idUser, idNovel);
    res.status(200).json(result);
  } catch (error) {
    console.error("Lỗi khi xử lý yêu thích:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

// Lấy danh sách yêu thích theo người dùng
const getFavoritesByUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const favorites = await favoriteNovelService.getFavoritesByUser(idUser);
    res.status(200).json(favorites);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách yêu thích:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

module.exports = {
  toggleFavorite,
  getFavoritesByUser,
};
