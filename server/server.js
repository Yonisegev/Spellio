const express = require("express");
const cors = require("cors");
const path = require("path");
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const app = express();
const dbService = require('./services/db.service')
const logger = require('./services/logger.service')
const leaderboardService = require('./services/leaderboards.service')


// Express App Config
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const corsOptions = {
  origin: [
    "http://localhost:4200",
    "http://127.0.0.1:4200",
  ],
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/api/tts', async (req, res) => {
  const { text } = req.query
  if (text.length > 25) return
  const client = new textToSpeech.TextToSpeechClient();
  const request = {
    input: { text },
    voice: { languageCode: 'en-US', name: 'en-US-Wavenet-F', ssmlGender: 'FEMALE' },
    audioConfig: { audioEncoding: 'MP3' },
  };
  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(`./public/audio/${text}.mp3`, response.audioContent, 'binary');
  res.end()
})

app.get('/api/leaderboard', async (req, res) => {
  try {
    const collection = await dbService.getCollection('leaderboard')
    const leaderboardScores = await collection.find({}).toArray()
    res.send(leaderboardScores)
  } catch (err) {
    logger.error('failed to fetch leaderboard scores', err)
  }
})

app.post('/api/leaderboard', async (req, res) => {
  try {
    const user = req.body
    console.log(user);
    const collection = await dbService.getCollection('leaderboard')
    await leaderboardService.handleLeaderboard(collection, user)
    return user
  } catch (err) {
    logger.error('Failed to insert user to leaderboard', err)
  }
})

app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  logger.info("Server is running on port: " + port);
});

console.log("Server Started");
