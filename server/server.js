import express from 'express';
import cors from 'cors';
//import path from 'path';

const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
 });
