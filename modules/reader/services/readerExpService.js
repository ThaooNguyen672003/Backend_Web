const ReaderExp = require("../../../models/readers/readerExpModel");

//Tự động tạo khi tạo User mới 
const createReaderExp = async (userId) => {
  const existingExp = await ReaderExp.findOne({ idUser: userId });
  if (!existingExp) {
    await ReaderExp.create({ idUser: userId });
    console.log("ReaderExp đã được tạo!");
  }
};

//Xóa khi User bị xóa
const deleteReaderExp = async (userId) =>{
    try {
        await ReaderExp.deleteOne({ idUser: userId });
        console.log("ReaderExp đã bị xóa!");
    } catch (error) {
        throw new Error("Lỗi khi xóa Reader Experience: " + error.message);
    }
}

//Lấy danh sách tất cả Reader Exp
const getAllReaderExp = async () => {
    try {
        return await ReaderExp.find();
    } catch (error) {
        throw new Error("Lỗi khi lấy danh sách ReaderExp: " + error.message);
    }
};

//Lấy thông tin Reader Exp theo ID
const getReaderExpById = async (id) => {
    try {
        const readerExp = await ReaderExp.findById(id);
        if (!readerExp) {
            throw new Error("Không tìm thấy ReaderExp.");
        }
        return readerExp;
    } catch (error) {
        throw new Error("Lỗi khi lấy ReaderExp: " + error.message);
    }
};

module.exports = { 
    getAllReaderExp, 
    getReaderExpById, 
    createReaderExp, 
    deleteReaderExp 
};
