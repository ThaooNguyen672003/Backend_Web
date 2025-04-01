const express = require('express');
const route = express.Router();
const novelController = require('../controllers/novelController');
const { authMiddleware, authorize } = require("../../../middlewares/authMiddleware");

//Thêm novel (Test)
route.post('/', /*authorize(["admin", "author"]),*/ novelController.addNovel);

//lấy tất cả novel
route.get('/', /*authorize(["admin", "author"]),*/ novelController.getNovels);

//Lấy novel qua Id
route.get('/:id', /*authorize(["admin", "author"]),*/ novelController.getNovelById);

//Cập nhật novel qua Id
route.put('/:id', /*authorize(["admin", "author"]),*/ novelController.updateNovelById);

//Xóa novel qua Id
route.delete('/:id', /*authorize(["admin", "author"]),*/ novelController.deleteNovelById);

module.exports = route;