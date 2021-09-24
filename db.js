const mongoose = require('mongoose');
const connectDb = () => {
   mongoose.connect(process.env.DB_URI, () => {
      console.log('db connected!');
   });
};

module.exports = {
   connectDb,
};
