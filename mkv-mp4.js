// https://github.com/Kagami/ffmpeg.js
var ffmpeg = require("ffmpeg.js/ffmpeg-mp4.js");
var fs = require("fs");
var testData = new Uint8Array(fs.readFileSync("./video/sample.mkv"));
// Encode mkv video to mp4.
var result = ffmpeg({
  MEMFS: [{name: "sample.mkv", data: testData}],
  arguments: ["-i", "sample.mkv", "-c", "copy", "out.mp4"],
  // Ignore stdin read requests.
  stdin: function() {},
});
// Write out.webm to disk.
var out = result.MEMFS[0];
fs.writeFileSync('./video/' + out.name, Buffer(out.data));