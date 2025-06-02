const mongoose = require('mongoose') ;
 const reportSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    seoScore: {
        type: Number,
        required: true
    },
    audits: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
 });

 module.exports = mongoose.model('ReportModel', reportSchema);