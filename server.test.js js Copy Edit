const server = require('./server');
const supertest = require('supertest');
const request = supertest(server);

describe('HTTP Server', () => {
  it('should return 200 and correct message', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello Node!\n');
  });
});
