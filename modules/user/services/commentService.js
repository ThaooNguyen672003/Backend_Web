const Comment = require("../../../models/users/commentModel");

//Thêm Comment
const addComment = async (commentData) => {
    try {
        const newComment = new Comment(commentData);
        await newComment.save();
        return newComment;
    } catch (error) {
        throw new Error(error.message);
    }
};

//Lấy Comment theo ID
const getCommentById = async (id) => {
    try {
        const comment = await Comment.findById(id);
        if (!comment) {
            throw new Error("Không tìm thấy comment.");
        }
        return comment;
    } catch (error) {
        throw new Error(error.message);
    }
};

//Xóa Comment theo ID
const deleteCommentById = async (id) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            throw new Error("Không tìm thấy comment để xóa.");
        }
        return deletedComment;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { 
    addComment,
    getCommentById, 
    deleteCommentById 
};
