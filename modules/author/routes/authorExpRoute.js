const express = require('express');
const route = express.Router();
const authorExpController = require('../controllers/authorExpController');
const { authMiddleware, authorize } = require("../../../middlewares/authMiddleware");

//Lấy tất cả Exp Author
route.get('/', authorize(["admin"]), authorExpController.getAllAuthorExp)

// //Thêm tự động Exp Author
// route.post('/', authorExpController.addAuthorExp); //Hệ thống tự động thì xử lý trong service

//Lấy Exp AuthorExp theo ID
route.get('/:id', authorize(["admin", "author"]), authorExpController.getAuthorExpById);

// //Xóa tự động AuthorExp theo ID
// route.delete('/:id', authorExpController.deleteAuthorExpById);

// //Cập nhật tự động AuthorExp theo ID
// route.put('/:id', authorExpController.updateAuthorExpById);

module.exports = route;