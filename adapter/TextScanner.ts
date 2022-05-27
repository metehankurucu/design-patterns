import Scanner from "./Scanner";

class TextScanner implements Scanner {
  scan = async () => {
    return "this is scanned text in TextScanner";
  };
}

export default TextScanner;
