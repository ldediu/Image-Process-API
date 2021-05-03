import sharp from 'sharp';
import {promises as fsPromises} from 'fs';

//const inputFile = '../assets/img_full/1.jpg' 


export const resize = async (img_name: string): Promise<void> => {
    try {
        await sharp('./assets/fjord.jpg')
        .resize(200, 200)
        .toFile('./assets/fjord2.jpg')
    } catch(e) {
        console.log(`Error occured: ${e}`);
    }
}
