const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

//Connect to Database
connectDB();
app.use(cors());

app.use(express.json({ extended: false }));

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const postsRoute = require("./routes/posts");

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
