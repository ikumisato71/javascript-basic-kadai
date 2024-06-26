/*
const event = new Date(Date.UTC(2024, 5, 24, 3, 0, 0));
const options = {
  // weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
/*

/*
console.log(event.toLocaleDateString("de-DE", options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString("ar-EG", options));
// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢
*/

// console.log(event.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012

const date = new Date();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const formattedDate = date.toLocaleDateString("ja-JP", options);
console.log(formattedDate);
/*
const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  // weekday: 'short', → 曜日オプションコメントアウト
}
const now = new Date()
const dateString = now.toLocaleDateString('ja-JP', options)
console.log(dateString) // → 2022年12月12日
*/
