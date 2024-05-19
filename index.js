import * as fs from 'fs';

let handstandEl = document.getElementById("handstand-videos")

console.log(handstandEl);

// const fs = require('fs');
const dir = './assets/handstand_videos';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});