const commentService = require("../services/commentService");

//Thêm Comment
const addComment = async (req, res) => {
    try {
        const { idNovel, idUser, content } = req.body;

        if (!idNovel || !idUser || !content) {
            return res.status(400).json({ success: false, message: "idNovel, idUser và content là bắt buộc." });
        }

        const newComment = await commentService.addComment({ idNovel, idUser, content });
        res.status(201).json({ success: true, data: newComment });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//Lấy Comment theo ID
const getCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await commentService.getCommentById(id);
        res.status(200).json({ success: true, data: comment });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

//Xóa Comment theo ID
const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        await commentService.deleteCommentById(id);
        res.status(200).json({ success: true, message: "Comment đã bị xóa." });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { 
    addComment, 
    getCommentById, 
    deleteCommentById 
};
