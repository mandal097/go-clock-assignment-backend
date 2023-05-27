require("dotenv").config();
require("./src/config/dbconn");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const baseRouter = require("./src/routes/router");
const testRouter = require("./src/routes/test");

const port = process.env.PORT || 8000;
const app = express();

app.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'amar.html'));
})


app.use('/api/v1', baseRouter);
app.use('/api/v1/test', testRouter);

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})