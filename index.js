import express from 'express';   
import userRoutes from './src/routes/userRoutes.js';  
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());  

app.use(express.json());
app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Serveris darbojas uz http://localhost:${port}`);
});

