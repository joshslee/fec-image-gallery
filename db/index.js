const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/errbnb', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connected To Mongo Database');
})

let listingSchema = mongoose.Schema({
  _id: String,
  photo: [{
    url: String,
    caption: String
    }]
});

let Listing = mongoose.model('Listing', listingSchema);

let getPhotosById = (id, callback) => {
  Listing.findOne({_id: id}, (err, entry) => {
    if (err) {
      callback(err);
    } else {
      callback(entry);
    }
  })
};

module.exports = {
    Listing,
    getPhotosById
};