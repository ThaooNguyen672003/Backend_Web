const AuthorRanking = require("../../../models/authors/authorRankingModel");

/**
 * Lấy tất cả Author Ranking
 */
const getAllAuthorView = async () => {
    try {
        return await AuthorRanking.find().sort({ totalViews: -1 });
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { getAllAuthorView };
