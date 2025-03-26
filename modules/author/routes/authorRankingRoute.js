const express = require('express');
const route = express.Router();
const authorRankingController = require('../controllers/authorRankingController');
const { authorize } = require("../../../middlewares/authMiddleware");

//Lấy tất cả Author Ranking (Show trên trang và Show cho Admin)
route.get('/', authorize(["admin"]), authorRankingController.getAllAuthorView)

// //Thêm tự động Author Ranking
// route.post('/', authorRankingController.addAuthorExp);

// //Xóa tự động Author Ranking theo ID
// route.delete('/:id', authorRankingController.deleteAuthorExpById);

// //Cập nhật tự động Author Ranking theo ID
// route.put('/:id', authorRankingController.updateAuthorExpById);

module.exports = route;