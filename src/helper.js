import cheerio from "cheerio";

export const getCleanedText = (htmlString) => {
  const $ = cheerio.load(htmlString);
  const text = $("html *")
    .not($("script")) // ignore script
    .not($("style")) // ignore style
    .contents() // text and comment nodes.
    .map(function () {
      // Extract Text from HTML with space separators
      return this.type === "text" ? $(this).text() + " " : "";
    })
    .get()
    .join("")
    .replace(/[^\w]/g, " ");
  return text;
};

export const getWordCount = (word, text) => {
  const wordsArray = text.split(/\s+/);
  let count = 0;
  wordsArray.forEach((w) => {
    if (w.toLowerCase() === word.toLowerCase()) {
      count++;
    }
  });
  return count;
};
// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export const isValidUrl = (string) => {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};
