import sharp from 'sharp';

export const resize = async (
  file_name: string,
  width: number,
  height: number
): Promise<boolean> => {
  try {
    await sharp(`./assets/img_full/${file_name}.jpg`)
      .resize(width, height)
      .toFile(`./assets/img_thumb/${file_name}_thumb.jpg`);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
