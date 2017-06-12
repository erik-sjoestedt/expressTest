const request = require('supertest');
const app = require('../../app');


describe('GET /', function() {
  it('responds with "HELLO WOLRD"', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, "HELLO WOLRD\n", done)
  });
});
