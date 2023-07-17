const express = require('express');

const userRouter = require('./routers/userRouter');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const { checkToken } = require('./middlewares/checkToken');
const app = express();
const mongoose = require('mongoose');
const { DB_SERVER } = require('./config.json');
const noteRouter = require('./routers/noteRouter');

// Mongoose
// connect to database
const credentials = {

  user: 'root',
  pass: 'root'
};

mongoose
  .connect(DB_SERVER,
    credentials
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(err);
  });

// Logger
app.use(morgan('dev'));
// CORS
app.use(cors());


// Body parser
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRouter);
// images
app.use('/api/notes/images', express.static('uploads'));
// NoteRoutes here
app.use('/api/notes', checkToken, noteRouter);



// Error handling
app.all((req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
