// utils/rate-limit.js

const requestCounts = {};
const MAX_REQUESTS = 5;
const TIME_FRAME = 60000;

const rateLimit = (req, res) => {
  return new Promise((resolve, reject) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    if (!requestCounts[ip]) {
      requestCounts[ip] = { count: 1, timer: null };
      requestCounts[ip].timer = setTimeout(() => {
        delete requestCounts[ip];
      }, TIME_FRAME);
    } else {
      requestCounts[ip].count++;
      if (requestCounts[ip].count > MAX_REQUESTS) {
        res.status(429).json({ error: 'Too many requests, please try again later.' });
        return;
      }
    }

    if (requestCounts[ip].count > MAX_REQUESTS) {
      res.status(429).json({ error: 'Too many requests, please try again later.' });
      reject('Rate limit exceeded');
    } else {
      resolve();
    }
  });
};

export default rateLimit;
