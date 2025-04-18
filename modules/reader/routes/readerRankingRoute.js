const express = require('express');
const route = express.Router();
const readerRankingController = require('../controllers/readerRankingController');
const { authorize } = require("../../../middlewares/authMiddleware");

//Lấy list Ranking
route.get('/', readerRankingController.getListRanking);

// Cập nhật danh sách Ranking Reader (Chạy thủ công Test Postman)
route.put("/update", readerRankingController.updateRanking);
module.exports = route;