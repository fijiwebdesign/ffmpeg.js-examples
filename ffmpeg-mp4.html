<html>
  <head><title>FFMPEG in browser</title></head>
  <body>

    <h2>FFMPEG MP4</h2>
    <p>use window.ffmpeg in browser</p>
    <h3>Example</h3>
    <video id="mpv" src="video/sample.mkv" controls></video>
    <video id="mp4" controls></video>
    <pre id="pre-source">
        
    </pre>

    <script src="js/ffmpeg-mp4.browser.js"></script>
    <script id="source">

    var $ = document.querySelector.bind(document)
    
    var ffmpeg = window.ffmpeg
        fetch('video/sample.mkv')
          .then(res => res.arrayBuffer())
          .then(arrayBuffer => {
            console.log('Got input', arrayBuffer)
            window.arrayBuffer = arrayBuffer // debugging
            const mp4Buffer = mkvToMp4(arrayBuffer)
            window.mp4Buffer = mp4Buffer // debugging
            const blob = new Blob([mp4Buffer], {type: 'video/mp4'})
            const dataUri = window.URL.createObjectURL(blob)
            console.log('Got output', mp4Buffer, dataUri)
            const video = $('#mp4')
            video.src = dataUri
            video.onloadeddata = function() {
                video.play();
            }
          })
          .catch(err => console.log('Error', err))

        // Encode mkv video to mp4.
        // https://github.com/Kagami/ffmpeg.js
        function mkvToMp4(arrayBuffer) {
          var result = ffmpeg({
            MEMFS: [{name: "sample.mkv", data: arrayBuffer}],
            arguments: ["-i", "sample.mkv", "-c", "copy", "out.mp4"],
            // Ignore stdin read requests.
            stdin: function() {},
          });
          // Write out.webm to disk.
          var out = result.MEMFS[0];
          if (!out) {
            throw new Error('Could not convert video')
          }
          return Uint8Array.from(out.data)
        }

    </script>
    <script>
      $('#pre-source').innerText = $('#source').innerText
    </script>
  </body>
</html>