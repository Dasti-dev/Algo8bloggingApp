// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // jwt.verify(token, 'secret_key', (err, decoded) => {
  //   console.log(token)
  //   if (err) {
  //     return res.status(401).json({ message: 'Invalid token' });
  //   }

  //   req.user = decoded;
  //   next();
  // });
  next();
};

module.exports = authMiddleware;
