import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Endpoint testing', () => {
  it('Server should run, main page should load', async () => {
    const res = await request.get('/');
    expect(res.status).toBe(200);
  });
  it('Api endpoint should work', async () => {
    const res = await request.get('/api');
    expect(res.status).toBe(400);
  });
});
