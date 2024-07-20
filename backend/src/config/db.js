import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.URLDB_DEV;

export async function startConnection() {
  try {
    await mongoose.connect(url);
    console.log('Successful connection with MongoDB...!');
  } catch (error) {
    console.log(error);
  }
}
