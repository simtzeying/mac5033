const request = require('supertest');
const app = require('../src/app');
 
describe('API', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
 
  test('GET /add adds two numbers', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });
 
  test('GET /add rejects bad input', async () => {
    const res = await request(app).get('/add?a=x&b=3');
    expect(res.status).toBe(400);
  });
});

