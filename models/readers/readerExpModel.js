const mongoose = require("mongoose");

const readerExpSchema = new mongoose.Schema({
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Người đọc
  totalExp: { type: Number, default: 0 }, // Tổng kinh nghiệm
  level: { type: Number, default: 1 } // Cấp độ của người đọc
}, { timestamps: true, collection: "ReaderExps" });

module.exports = mongoose.model("ReaderExp", readerExpSchema);
