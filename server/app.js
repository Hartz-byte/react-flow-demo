const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/user");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", userRouter);

app.listen(3002);
