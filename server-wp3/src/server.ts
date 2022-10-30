import express from "express";
import cors from 'cors';
import loginRouter from './routers/loginRouter'
import homePageRouter from './routers/homePageRouter'
import bodyParser from 'body-parser'
import { dbConnection } from './DBConnection'

const app = express();
const port = process.env.PORT || 5073;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/login', loginRouter);
app.use('/api/homepage', homePageRouter);

dbConnection.connect((err: any) => {
  if (err) {
    return console.log('error' + err.message);
  } else { console.log('MySQL connected'); }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});