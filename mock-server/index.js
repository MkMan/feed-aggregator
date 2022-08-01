/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { Stubsy } = require('stubsy');
const { twitterFeed } = require('./responses');

const stubsy = new Stubsy();

stubsy.registerEndpoint('getFeed', {
  type: 'get',
  path: '/api',
  status: 200,
  responseBody: twitterFeed,
  delay: 2000,
});

// eslint-disable-next-line no-console
console.log('Mock server running on http://localhost:3000/Stubsy');
stubsy.app.listen(3000);
