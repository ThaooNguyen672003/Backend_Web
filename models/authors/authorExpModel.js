const mongoose = require("mongoose");

const authorExpSchema = new mongoose.Schema({
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalExp: { type: Number, default: 0 },
  level: { type: Number, default: 1 }
}, { timestamps: true, collection: "AuthorExps" });

module.exports = mongoose.model("AuthorExp", authorExpSchema);
