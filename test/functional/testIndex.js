const request = require('supertest');
const app = require('../../src/app');


describe('GET /', () => {
  it('responds with "HELLO WOLRD"', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, "HELLO WOLRD\n", done)
  });
});
