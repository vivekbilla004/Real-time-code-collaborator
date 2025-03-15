const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB...');
    } catch (err) {
        console.error('Could not connect to MongoDB...', err);
    }
};

module.exports = connectDB;
