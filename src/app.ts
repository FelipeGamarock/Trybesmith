import express from 'express';

import productsRoute from './routes/productsRoute';
import userRoute from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);

export default app;
