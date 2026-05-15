const  express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ErorrHeandler } = require("./utils/ErrorHeandlers");
const reservationRouter = require("./Routes/reservation.route");
const adminPageRouter = require("./Routes/adminPage.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "start server"
    })
});

app.use("/api", reservationRouter);
app.use("/api", adminPageRouter);


app.use((req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Route not found"
    });
});
app.use(ErorrHeandler);

mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    }).then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
