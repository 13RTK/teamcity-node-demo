import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/user", (_req, res) => {
    res.status(200).json({
        status: "success",
        data: "users",
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
