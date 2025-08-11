import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connect from './db/connect.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connect();

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Use routes
app.use('/', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
