import AudioScanner from "./AudioScanner";
import AudioScannerAdapter from "./AudioScannerAdapter";
import Scanner from "./Scanner";
import TextScanner from "./TextScanner";

(async () => {
  console.log("Text Scanner:\n");

  let scanner: Scanner = new TextScanner();
  console.log(await scanner.scan());

  console.log("\nAudio Scanner with adapter\n");

  scanner = new AudioScannerAdapter(new AudioScanner());
  console.log(await scanner.scan());
})();
