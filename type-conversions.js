// arrayBuffer to blob
function ArrayBufferToBlob(arrayBuffer) {
  const dataView = new DataView(arrayBuffer);
  const blob = new Blob([dataView], { type: mimeString });
  return blob
}

// blob to arrayBuffer
function blobToArrayBuffer(blob, cb) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
      const arrayBuffer = event.target.result;
      cb(arrayBuffer)
  };
  fileReader.readAsArrayBuffer(blob);
}

module.exports = {
  ArrayBufferToBlob,
  blobToArrayBuffer
}
