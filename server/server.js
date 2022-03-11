import express from 'express';
import cors from 'cors';
import categoryRouter from './routes/route.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5000;

//use middleware

app.use(cors());
app.use(express.json());

// using routes
app.use(categoryRouter);

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
