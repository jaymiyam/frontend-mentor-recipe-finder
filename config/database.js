import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  if (connected) {
    console.log('MongoDB connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    // throw on database connect error,the NextJS global error boundary will catch it
    throw new Error('Failed to connect to database', error);
  }
};

export default connectDB;
