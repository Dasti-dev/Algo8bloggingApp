const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

app.use(errorHandler);

app.use('/', (req, res) => {
  res.status(200).json({
    'msg': 'Welcome to Blogging site',
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 
