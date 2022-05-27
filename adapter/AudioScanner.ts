class AudioScanner {
  recordAudio = async (outputFileName: string) => {
    console.log("Audio recording..");
    console.log(`Audio recorded and saved as ${outputFileName}`);
    return outputFileName;
  };

  convertAudioToText = async (fileName: string) => {
    return `this is text content of ${fileName} audio.`;
  };
}

export default AudioScanner;
