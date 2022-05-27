import AudioScanner from "./AudioScanner";
import Scanner from "./Scanner";

class AudioScannerAdapter implements Scanner {
  audioScanner: AudioScanner;

  constructor(audioScanner: AudioScanner) {
    this.audioScanner = audioScanner;
  }

  scan = async () => {
    const recordedAudioPath = await this.audioScanner.recordAudio("output.mp3");
    return await this.audioScanner.convertAudioToText(recordedAudioPath);
  };
}

export default AudioScannerAdapter;
