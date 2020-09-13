const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const routes = require("./routes/Routes");

const app = express();

mongoose.connect('mongodb+srv://linx-interview:linx-challenge@cluster0.2b0jv.mongodb.net/linx-cluster?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);