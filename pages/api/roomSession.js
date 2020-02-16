import { newSession } from '../../packages/backend/mongo/connection';

const apiNewSession = async (req, res) => {
  try {
    await newSession(req.body.teamName, req.body.roomName);
    res.status(200);
  } catch (error) {
    console.log(error.message);
  }
};

export default apiNewSession;
