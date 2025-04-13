import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error(err));

// // Sample Route
// app.get("/", (req, res) => {
//   res.send("Cancer Care API is Running!");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// Load environment variables from .env file
// dotenv.config();

const mongoURI = process.env.MONGO_URI;
console.log(process.env.MONGO_URI); // Check if the URI is loaded


if (!mongoURI) {
  console.error('MongoDB URI is missing!');
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

