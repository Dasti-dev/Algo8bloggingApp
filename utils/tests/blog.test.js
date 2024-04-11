const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe('Blogs', () => {
  describe('GET /blogs', () => {
    it('should get all blogs', (done) => {
      chai.request(app)
        .get('/blogs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
  });


  describe('GET /blogs/:id', () => {
    it('should get a single blog by id', (done) => {
      chai.request(app)
        .get('/blogs/1') 
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });

    it('should return 404 if blog id does not exist', (done) => {
      chai.request(app)
        .get('/blogs/999') 
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('POST /blogs', () => {
    it('should create a new blog', (done) => {
      const newBlog = {
        data: "new blog"
      };

      chai.request(app)
        .post('/blogs')
        .send(newBlog)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Blog created successfully');
          res.body.should.have.property('id');
          done();
        });
    });

  });

  describe('PUT /blogs/:id', () => {
    it('should update an existing blog', (done) => {
      const updatedBlog = {
        data: 'Updated Test Blog',
      };

      chai.request(app)
        .put('/blogs/1') 
        .send(updatedBlog)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Blog updated successfully');
          done();
        });
    });


  });

  describe('DELETE /blogs/:id', () => {
    it('should delete an existing blog', (done) => {
      chai.request(app)
        .delete('/blogs/1') 
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Blog deleted successfully');
          done();
        });
    });

  });
});
