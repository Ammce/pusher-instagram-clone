import express from 'express';

import pusher from './config/pusherConfig';
import middlewareConfig from './config/middlewareConfig';
import headersConfig from './config/headersConfig';

var app = express();

// Middleware config
middlewareConfig(app);

// Headers Configuration
headersConfig(app);

app.post('/like', (req, res, next) => {
  res.status(200).json({ msg: 'You have one more like' });
  pusher.trigger('instagram', 'like', {
    payload: 'You have 1 more like',
    data: 1
  });
});

const PORT = process.env.PORT || 7878;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up and running on port ${PORT}`);
});
