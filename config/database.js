import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  if (connected) {
    console.log('MongoDB connected');
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
