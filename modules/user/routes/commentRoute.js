const express = require('express');
const route = express.Router();
const commentController = require('../controllers/commentController');
const {authMiddleware} = require('../../../middlewares/authMiddleware');

//Thêm comment
route.post('/', commentController.addComment);

//Sửa comment qua Id
route.get('/:id', commentController.getCommentById);

//Xóa comment qua Id
route.delete('/:id', commentController.deleteCommentById);

module.exports = route;