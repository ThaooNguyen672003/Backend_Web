const Chapter = require("../../../models/novel/chapterModel");

/**
 * Thêm Chapter mới
 */
const addChapter = async (chapterData) => {
    try {
        const newChapter = new Chapter(chapterData);
        await newChapter.save();
        return newChapter;
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * Lấy danh sách tất cả Chapters
 */
const getChapters = async () => {
    try {
        return await Chapter.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * Lấy Chapter theo ID
 */
const getChapterById = async (id) => {
    try {
        const chapter = await Chapter.findById(id);
        if (!chapter) {
            throw new Error("Không tìm thấy chapter.");
        }
        return chapter;
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * Cập nhật Chapter theo ID
 */
const updateChapterById = async (id, updateData) => {
    try {
        const updatedChapter = await Chapter.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedChapter) {
            throw new Error("Không tìm thấy chapter để cập nhật.");
        }
        return updatedChapter;
    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * Xóa Chapter theo ID
 */
const deleteChapterById = async (id) => {
    try {
        const deletedChapter = await Chapter.findByIdAndDelete(id);
        if (!deletedChapter) {
            throw new Error("Không tìm thấy chapter để xóa.");
        }
        return deletedChapter;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { addChapter, getChapters, getChapterById, updateChapterById, deleteChapterById };
