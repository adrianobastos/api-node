var mongoose = require('mongoose');

var CoresSchema = new mongoose.Schema({
    cor_name: String,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('colors', CoresSchema);