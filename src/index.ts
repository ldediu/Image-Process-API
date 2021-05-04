import express from 'express';
import sharp from 'sharp'

import routes from './routes/routes';
import {resize} from './utils/img_process'

const app = express();
const port = 3000;

app.use(routes);




app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
