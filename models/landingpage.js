var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LandingDataSchema = new Schema({
    _id: Schema.Types.ObjectId,
    data: String
});

var LandingDataModel = mongoose.model('LandingDataModel', LandingDataSchema);