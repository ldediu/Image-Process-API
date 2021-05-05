import { resize } from '../utils/img_process';
import fs from 'fs';
import path from 'path';

describe('Image processing fucntionality testing', () => {
  const file_name = 'fjord';

  afterAll(() => {
    try {
      fs.rmSync(
        path.join(
          __dirname,
          '..',
          '..',
          'assets',
          'img_thumb',
          `${file_name}_thumb.jpg`
        )
      );
    } catch (e) {
      console.log(e);
    }
  });

  it('Should work as expected', async () => {
    await expectAsync(resize(file_name, 200, 200)).toBeResolvedTo(true);
  });

  it('Should fail because of nonexistent image', async () => {
    await expectAsync(
      resize('nonexistent_image', 200, 200)
    ).toBeRejectedWithError('Input file is missing');
  });
});
