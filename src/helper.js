import cheerio from "cheerio";

export const getBodyText = (htmlString) => {
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
    .join("");
  return text;
};

export const getWordCount = (word, text) => {
  const wordsArray = text.split(/\s+/);
  let count = 0;
  wordsArray.forEach((w) => {
    if (w === word) {
      count++;
    }
  });
  return count;
};
