import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://devonacanada1:<Password1>@cluster0.ye3ew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const db = async (): Promise<typeof mongoose.connection> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected.');
    return mongoose.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Database connection failed.');
  }
};

export default db;
