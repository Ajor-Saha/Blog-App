const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');
// const postRoutes = require('./routes/postRoutes');
// const { invalidPathHandler, errorResponserHandler } = require("./middleware/errorHandler");
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require("./routes/commentRoutes");
const { invalidPathHandler, errorResponserHandler } = require("./middleware/errorHandler");



dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Server is running..");
});

// app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
// // static assests
// app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);
// app.use(invalidPathHandler);
// app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
   });

