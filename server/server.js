const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect to Database
connectDB();

app.use(express.json({ extended: false }));

const usersRoute= require("./routes/users");
const authRoute=require("./routes/auth");
const profileRoute=require("./routes/profile");

app.use('/api/users',usersRoute);
app.use('/api/auth',authRoute);
app.use('/api/profile',profileRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on port " + PORT));
