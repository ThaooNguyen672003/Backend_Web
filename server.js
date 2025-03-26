require("dotenv").config(); // Load biến môi trường
require("./cron-job/rankingCronJob");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config/env");
const connectDB = require("./config/database");


// Kết nối MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Import routes từ các module
const readerExpRoutes = require("./modules/reader/routes/readerExpRoute");
const readerRankingRoutes = require("./modules/reader/routes/readerRankingRoute");
const userRoutes = require("./modules/user/routes/userRoute");
const commentRoutes = require("./modules/user/routes/commentRoute");
const authorExpRoutes = require("./modules/author/routes/authorExpRoute");
const authorRankingRoutes = require("./modules/author/routes/authorRankingRoute");
const authorTaskRoutes = require("./modules/author/routes/authorTaskRoute");
const taskRoutes = require("./modules/author/routes/taskRoute");


// Định nghĩa route động
app.use("/api/readerExps", readerExpRoutes);
app.use("/api/readerRankings", readerRankingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/authorExps", authorExpRoutes);
app.use("/api/authorRankings", authorRankingRoutes);
app.use("/api/authorTasks", authorTaskRoutes);
app.use("/api/tasks", taskRoutes);

// Xử lý lỗi 404 (Không tìm thấy route)
app.use((req, res) => {
  res.status(404).json({ message: "Route không tồn tại" });
});

// Khởi động server
const PORT = config.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng : ${PORT}`);
});
