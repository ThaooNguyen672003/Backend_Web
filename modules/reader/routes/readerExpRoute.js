const express = require('express');
const route = express.Router();
const readerExpController = require('../controllers/readerExpController');
const { authMiddleware, authorize } = require("../../../middlewares/authMiddleware");

//Lấy tất cả ReaderExp
route.get('/', authorize(["admin"]), readerExpController.getAllReaderExp)

//Lấy Exp Reader theo ID
route.get('/:id', authorize(["admin", "reader"]), readerExpController.getReaderExpById);

module.exports = route;