import express from 'express';
import { resize } from '../utils/img_process';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Main page')
});

routes.get('/api', (req, res) => {
    let req_arr = Object.values(req.query)
    console.log(req_arr)
    if (req_arr.length < 3) {
        res.status(200);
        res.send('Your query must include file_name, width and height');
    } else {
        const file_name = req_arr[0];
        const width = req_arr[1];
        const height = req_arr[2];

        res.status(200);
        res.send('Cool');
    }
})


export default routes;