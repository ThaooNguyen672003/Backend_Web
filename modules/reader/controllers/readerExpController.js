const readerExpService = require("../services/readerExpService");

//lấy tất cả Reader Exp
const getAllReaderExp = async (req, res) => {
    try {
        const data = await readerExpService.getAllReaderExp();
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//lấy Reader Exp theo ID
const getReaderExpById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await readerExpService.getReaderExpById(id);
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getAllReaderExp, getReaderExpById };
