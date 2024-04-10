// tests/blog.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Blogs', () => {
  describe('GET /blogs', () => {
    it('it should get all blogs', (done) => {
      chai.request(app)
        .get('/blogs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });
});
