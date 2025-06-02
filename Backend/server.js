const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const reportRoute = require('./Routes/reportRoute');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/report', reportRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    app.listen(PORT, () => console.log("Server connected"));
})
.catch(error => console.error("Server not connected:", error));