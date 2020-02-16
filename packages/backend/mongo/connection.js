const mongoose = require('mongoose');
const Session = require('./sessionSchema');

mongoose
  .connect(
    'mongodb+srv://@team-health-checker-zkeoi.mongodb.net/thc', //NAUGHTY NAUGHTY
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('connected to mongoDB');
  })
  .catch(err => console.error('Connection failed: ', err));

export const newSession = async (teamName, roomName) => {
  console.log('connection.js reached');
  const session = new Session({
    teamName,
    roomName
  });
  const result = await session.save();
  console.log(result);
  mongoose.disconnect().then(() => {
    console.log('connection closed');
  });
};