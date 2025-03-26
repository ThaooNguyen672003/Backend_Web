const authorRankingService = require("../services/authorRankingService");

/**
 * Lấy tất cả Author Ranking (Admin và người dùng có thể xem)
 */
const getAllAuthorView = async (req, res) => {
    try {
        const rankings = await authorRankingService.getAllAuthorView();
        res.status(200).json({ success: true, data: rankings });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { getAllAuthorView };
