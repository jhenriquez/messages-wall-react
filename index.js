import dotenv from 'dotenv';
import server from 'messages-wall-api';

dotenv.config();

server.listen(process.env.PORT || 8180, () => {
  console.log(`listening on :8180`);
});