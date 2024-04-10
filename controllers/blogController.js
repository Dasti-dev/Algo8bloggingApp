// controllers/blogController.js
const Blog = require('../models/Blog');

exports.getAllBlogs = (req, res) => {
  Blog.getAll((err, blogs) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json(blogs);
  });
};

exports.getBlogById = (req, res) => {
  const id = req.params.id;

  Blog.getById(id, (err, blog) => {
    if (err || !blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  });
};

exports.createBlog = (req, res) => {
  const data = req.body;

  Blog.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json({ message: 'Blog created successfully', id: result.insertId });
  });
};

exports.updateBlog = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  Blog.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json({ message: 'Blog updated successfully' });
  });
};

exports.deleteBlog = (req, res) => {
  const id = req.params.id;

  Blog.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json({ message: 'Blog deleted successfully' });
  });
};
