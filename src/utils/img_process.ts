import sharp from 'sharp';

export const resize = async (file_name: string, width: number, height: number): Promise<void> => {
    try {
        await sharp(`./assets/img_full/${file_name}.jpg`)
        .resize(width, height)
        .toFile(`./assets/img_formatted/${file_name}_f.jpg`)
    } catch(e) {
        console.log(`Error occured: ${e}`);
    }
}
