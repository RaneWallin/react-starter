const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 5150;

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(helmet.noSniff());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

