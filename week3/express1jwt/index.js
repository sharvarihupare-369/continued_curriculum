const express = require("express");
require("dotenv").config();
const app = express();
const { userRouter } = require("./routes/userRoutes");
const { connecton } = require("./config/db");
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Route!");
});
app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await connecton;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Something Went Wrong");
  }
  console.log(`App is listening on Port ${PORT}`);
});
