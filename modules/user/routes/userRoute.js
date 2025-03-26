const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, authorize } = require("../../../middlewares/authMiddleware");

//Xử lý login
route.post('/login', userController.loginUser);

//Thêm user
route.post('/', userController.addUser);

//Lấy user
route.get("/", userController.getUser);

//Xóa user dựa trên Id
route.delete('/:id', userController.deleteUserById);

//Cập nhật user dựa trên Id
route.put('/:id', userController.updateUserById);

module.exports = route;