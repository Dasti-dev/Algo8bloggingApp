// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(token)
    
    if (err) {
      console.log(err)
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
  // next();
};

module.exports = authMiddleware;
