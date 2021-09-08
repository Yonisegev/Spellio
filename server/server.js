const express = require("express");
const cors = require("cors");
const path = require("path");
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const app = express();


// Express App Config
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:4200",
      "http://localhost:4200",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}


app.get('/api/tts', async (req, res) => {
  const { text } = req.query
  const client = new textToSpeech.TextToSpeechClient();
  const request = {
    input: { text },
    voice: { languageCode: 'en-US', ssmlGender: 'FEMALE' },
    audioConfig: { audioEncoding: 'MP3' },
  };
  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile(`./public/audio/${text}.mp3`, response.audioContent, 'binary');
  res.end()
})



app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const logger = require("./services/logger.service");
const port = process.env.PORT || 3030;
app.listen(port, () => {
  logger.info("Server is running on port: " + port);
});

console.log("Server Started");
