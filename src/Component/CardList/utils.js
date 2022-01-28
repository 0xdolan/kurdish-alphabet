// const fs = require("fs");
// const readLine = require("readline");

const getUnicodePosition = function (character) {
  const result = character.charCodeAt(0);
  return result;
};

const getOnlyUnicodeCodePoint = function (character) {
  const hex = character.codePointAt(0).toString(16);
  const result = "0000".substring(0, 4 - hex.length) + hex;
  return result.toUpperCase();
};

const getUnicodeCodePoint = function (character) {
  const hex = character.codePointAt(0).toString(16);
  const result = "U+" + "0000".substring(0, 4 - hex.length) + hex;
  return result.toUpperCase();
};

const kuChars = [
  "ئ",
  "ا",
  "ب",
  "ت",
  "ج",
  "ح",
  "خ",
  "د",
  "ر",
  "ز",
  "س",
  "ش",
  "ع",
  "غ",
  "ف",
  "ق",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "پ",
  "چ",
  "ڕ",
  "ژ",
  "ڤ",
  "ک",
  "گ",
  "ڵ",
  "ۆ",
  "ی",
  "ێ",
  "ە",
];

// const getUnicodeFullName = function (character) {
//   // console.log(getOnlyUnicodeCodePoint(character));
//   const unicodeData = "./UnicodeData.txt";
//   let rl = readLine.createInterface({
//     input: fs.createReadStream(unicodeData),
//     output: process.stdout,
//     terminal: false,
//   });
//   rl.on("line", function (text) {
//     // console.log(text);
//     const unicodeCodePoint = text.split(";")[0];
//     const unicodeCodePointFullName = text.split(";")[1];
//     if (unicodeCodePoint === getOnlyUnicodeCodePoint(character)) {
//       console.log(unicodeCodePointFullName);
//     }
//   });
// };

// console.log(getUnicodeFullName("a"));

// const unicodeResultForPage = function (characterList) {
//   result = [];
//   characterList.forEach((character) => {
//     let unicodeCodePoint = getUnicodeCodePoint(character);
//     let fullName = getUnicodeFullName(character);
//     result.push(`| ${character} | ${unicodeCodePoint} | ${fullName}`);
//   });
//   return result;
// };

// console.log(unicodeResultForPage(kuChars));

// ARABIC-BASED
const arChars = "ئابتجحخدرزسشعغفقلمنهوو∅پچڕژڤکگڵۆییێە∅";
const arDigits = "٠١٢٣٤٥٦٧٨٩";

// LATIN-BASED
const laSmall = "∅abtcĥxdrzsş∅ẍfqlmnhwuûpçŕjvkgĺoyîêei";
const laDigits = "0123456789";
const laVowels = "auûoîêei";

const convert = (a, b, c, d) => a.map((k, i) => [k, b[i], c[i], d[i]]);
const capitalizedWord = function (name) {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return nameCapitalized;
};
const laExamples = [
  "êsta",
  "dar",
  "baran",
  "temate",
  "circ",
  "ĥewt",
  "xatûn",
  "daban",
  "çiro",
  "zîn",
  "sîmîn",
  "şew",
  "erebî",
  "ẍurbet",
  "feŕş",
  "qîst",
  "lêwanlêw",
  "mem",
  "nêwan",
  "hawar",
  "wirya",
  "kurd",
  "dûr",
  "pîtoĺ",
  "çwarçêwe",
  "ŕûbeŕû",
  "jyan",
  "tavge",
  "kerkûk",
  "gurg",
  "kiĺoĺ",
  "dolan",
  "yad",
  "sîr",
  "pêrê",
  "behremend",
  "mirdin",
];
const arExamples = [
  "ئێستا",
  "دار",
  "باران",
  "تەماتە",
  "جرج",
  "حەوت",
  "خاتوون",
  "دابان",
  "چرۆ",
  "زین",
  "سیمین",
  "شەو",
  "عەرەبی",
  "غوربەت",
  "فەڕش",
  "قیست",
  "لێوانلێو",
  "مەم",
  "نێوان",
  "هاوار",
  "وریا",
  "کورد",
  "دوور",
  "پیتۆڵ",
  "چوارچێوە",
  "ڕووبەڕوو",
  "ژیان",
  "تاڤگە",
  "کەرکووک",
  "گورگ",
  "کڵۆڵ",
  "دۆلان",
  "یاد",
  "سیر",
  "پێرێ",
  "بەهرەمەند",
  "مردن",
];

const mappings = convert(
  arChars.split(""),
  laSmall.split(""),
  arExamples,
  laExamples
);

const jsonResults = function (mappings) {
  let result = [];
  mappings.forEach((element) => {
    let character = element[0];
    let unicode = getUnicodeCodePoint(character);
    let example = element[2];
    let latinSmall = element[1];
    let latinSmallUnicode = getUnicodeCodePoint(latinSmall);
    let latinCapital = latinSmall.toUpperCase();
    let latinCapitalUnicode = getUnicodeCodePoint(latinCapital);
    let latinExample = capitalizedWord(element[3]);

    let res = {
      character,
      unicode,
      example,
      latinSmall,
      latinSmallUnicode,
      latinCapital,
      latinCapitalUnicode,
      latinExample,
    };

    // HANLE N/A ITEMS
    if (latinSmall === "∅" || latinCapital === "∅") {
      res = {
        ...res,
        latinSmall: "Not Available",
        latinSmallUnicode: "Not Available",
        latinCapital: "Not Available",
        latinCapitalUnicode: "Not Available",
      };
    }
    if (character === "∅" && latinSmall === "û") {
      res = {
        ...res,
        character: "وو",
        unicode: getUnicodeCodePoint("و") + " " + getUnicodeCodePoint("و"),
      };
    }
    if (character === "∅" && latinSmall === "i") {
      res = {
        ...res,
        character: "Not Available",
        unicode: "Not Available",
      };
    }

    if ("ŕĺẍ".includes(latinSmall)) {
      res = { ...res, recommended: true };
    }

    if (laVowels.includes(latinSmall)) {
      res = { ...res, type: "Vowel" };
    } else {
      res = { ...res, type: "Consonant" };
    }
    result.push(res);
  });
  return result;
};

// DIGITS

const digitconvert = (a, b) => a.map((k, i) => [k, b[i]]);
const digitMappings = digitconvert(arDigits.split(""), laDigits.split(""));

const jsonDigitResults = function (digitMappings) {
  let result = [];
  digitMappings.forEach((element) => {
    let arDigit = element[0];
    let arDigitUnicode = getUnicodeCodePoint(arDigit);
    let laDigit = element[1];
    let laDigitUnicode = getUnicodeCodePoint(laDigit);
    let type = "Digit";

    let res = {
      arDigit,
      arDigitUnicode,
      laDigit,
      laDigitUnicode,
      type,
    };

    result.push(res);
  });
  return result;
};

const characterResults = jsonResults(mappings);
const digitResults = jsonDigitResults(digitMappings);
export const finalResults = characterResults.concat(digitResults);
// console.log(finalResults);

// EXPORT TO JSON FILE
// fs.writeFile("./data.json", JSON.stringify(finalResults), function (err) {
//   if (err) throw err;
//   console.log("Done");
// });

// module.exports = finalResults;
