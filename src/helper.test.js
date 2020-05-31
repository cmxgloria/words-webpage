import { getCleanedText, getWordCount, isValidUrl } from "./helper";

describe("helper", () => {
  describe("getCleanedText", () => {
    test("should return cleaned text with space", () => {
      const htmlString =
        "<html><body><ul><li>One</li><li>Two</li></body></html>";
      const text = getCleanedText(htmlString);
      const expectedText = "One Two ";
      expect(text).toBe(expectedText);
    });
    test("should repalce non word-character with space from html string", () => {
      const htmlString =
        '<html><head></head><body><h2 class="title welcome">Hello there 123!</h2></body></html>';
      const text = getCleanedText(htmlString);
      const expectedText = "Hello there 123  ";
      expect(text).toBe(expectedText);
    });
  });
  describe("getWordCount", () => {
    test("should get correct world count case insenstive", () => {
      const cleanedText = "Hello there hello 123  ";
      const word = "hello";
      const count = getWordCount(word, cleanedText);
      const expectedCount = 2;
      expect(count).toBe(expectedCount);
    });
    test("should return 0 if word not found in text", () => {
      const cleanedText = "Hello there hello 123  ";
      const word = "apple";
      const count = getWordCount(word, cleanedText);
      const expectedCount = 0;
      expect(count).toBe(expectedCount);
    });
  });
  describe("isValidUrl", () => {
    test("should return true if Url is valid", () => {
      const url = "https://circlein.com/";
      const result = isValidUrl(url);
      expect(result).toBe(true);
    });
    test("should return false if Url is invalid", () => {
      const url = "https://circlein/";
      const result = isValidUrl(url);
      expect(result).toBe(false);
    });
  });
});
