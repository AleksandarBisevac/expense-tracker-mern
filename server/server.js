import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRouter from './routes/route.js';
import connectDB from './db/connection.js';

const app = express();
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5000;

//use middleware

app.use(cors());
app.use(express.json());

// using routes
app.use(categoryRouter);

// mongodb connection

const start = async () => {
  try {
    await connectDB(process.env.ATLAS_URI);
    app.listen(port, () => console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
