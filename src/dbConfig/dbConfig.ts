import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function DbConnect () {
    try {
        mongoose.connect("mongodb://localhost:27017/Next"!)
        const connection = mongoose.connection;

      connection.on('connected', () => {
          console.log('MongoDB connected successfully');
      })

      connection.on('error', (err) => {
          console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
          process.exit();
      })

    connection.on('disconnected' , () => {
        console.log("mongoDb disconnected successfully");
    })

    } catch (error) {
        console.log("Something went wrong : ");
        console.log(error);
    }
}





