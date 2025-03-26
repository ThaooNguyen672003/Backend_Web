const cron = require("node-cron");
const { updateRanking } = require("../modules/reader/services/readerRankingService.js");

// Chạy mỗi ngày vào lúc 00:00 (giờ server)
cron.schedule("0 0 * * *", async () => {
  console.log("Đang cập nhật bảng xếp hạng...");
  await updateRanking();
  console.log("Bảng xếp hạng đã được cập nhật!");
});

console.log("Cron-job cập nhật bảng xếp hạng đã được thiết lập!");
