const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const path = require('path');

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const serverBaseUrl = `http://localhost:${process.env.PORT}`;

const data = {
  "rank": {
    "obtained": "69,840",
    "total": "110,000"
  },
  "wins": { "name": "WINS", "value": "44%" },
  "score_min": { "name": "SCORE/MIN", "value": "592" },
  "kills_min": { "name": "KILLS/MIN", "value": "0.60" },
  "machine": [
    {
      "type": "TOP VECHILE",
      "img": `${serverBaseUrl}/assets/soldier__tank-white.svg`,
      "name": "MAIN BATTLE TANK",
      "value": "33 kills"
    },
    {
      "type": "TOP PRIMARY",
      "img": `${serverBaseUrl}/assets/acw-white.svg`,
      "name": "ACW-R",
      "value": "495 kills"
    },
    {
      "type": "TOP CLASS",
      "img": `${serverBaseUrl}/assets/Vector.svg`,
      "name": "ENGINEER",
      "value": "828,514 score"
    },
    {
      "type": "TOP SIDEARM",
      "img": `${serverBaseUrl}/assets/m9-white.svg`,
      "name": "M9",
      "value": "112 kills"
    }
  ],
  "specifications": [
    {
      "name": "WEAPONS",
      "score": "63",
      "total": "185"
    },
    {
      "name": "KITS",
      "score": "46",
      "total": "64"
    },
    {
      "name": "VEHICLES",
      "score": "77",
      "total": "182"
    },
    {
      "name": "MEDALS",
      "score": "11",
      "total": "54"
    },
    {
      "name": "ASSIGNMENTS",
      "score": "21",
      "total": "110"
    },
    {
      "name": "DOG TAGS",
      "score": "357",
      "total": "720"
    }
  ],
  "extra": "BATTLEPACKS"
};

app.get('/get-data', (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    console.log('Something went wrong', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
