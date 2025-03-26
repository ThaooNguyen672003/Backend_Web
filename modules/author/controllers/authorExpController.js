const AuthorExpService = require("../services/authorExpService");

  // Lấy tất cả AuthorExp
  const getAllAuthorExp = async (req, res) => {
    try {
      const data = await AuthorExpService.getAllAuthorExp();
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  // Lấy Exp của một Author theo ID
  const getAuthorExpById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await AuthorExpService.getAuthorExpById(id);
      if (!data) return res.status(404).json({ success: false, message: "Không tìm thấy dữ liệu" });

      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

module.exports = {
  getAllAuthorExp,
  getAuthorExpById
};
