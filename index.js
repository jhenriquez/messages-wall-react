require('dotenv').config();

const server = require('messages-wall-api');

server.listen(process.env.PORT || 8180, () => {
  console.log(`listening on :8180`);
});