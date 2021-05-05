import express from 'express';
import path from 'path';
import fs from 'fs';
import { resize } from '../utils/img_process';

const routes = express.Router();

routes.get('/', (req:express.Request, res:express.Response) => {
  res.status(200);
  res.send('Main page');
});

routes.get('/api', async (req:express.Request, res:express.Response) => {
  const req_arr = Object.values(req.query);
  if (req_arr.length < 3) {
    res.status(400);
    res.send('Your query parameters must include file_name, width and height');
  } else {
    try {
      const file_name = (req_arr[0] as unknown) as string;
      const width = parseInt((req_arr[1] as unknown) as string);
      const height = parseInt((req_arr[2] as unknown) as string);
      const output_file = path.join(
        __dirname,
        '..',
        '..',
        'assets',
        'img_thumb',
        `${file_name}_thumb.jpg`
      );
      if (fs.existsSync(output_file)) {
        res.status(200);
        res.sendFile(output_file);
      } else {
        if (await resize(file_name, width, height)) {
          res.status(200);
          res.sendFile(output_file);
        } else {
          res.status(400);
          res.send(`No such image or wrong input data`);
        }
      }
    } catch (e) {
      console.log(`Error: ${e}`);
      res.status(400);
    }
  }
});

export default routes;
