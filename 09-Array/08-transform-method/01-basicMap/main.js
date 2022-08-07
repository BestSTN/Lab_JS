const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
array1.map((item) => item * 2);

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
array2.map((item) => "" + item);

const array3 = [1, "1", 2, {}];
// result: ["number", "string", "number", "object"]
array3.map((item) => typeof item);

const array4 = ["apple", "banana", "orange"];
// result: ["APPLE", "BANANA", "ORANGE"]
array4.map((item) => item.toUpperCase());

const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
array5.map((item) => (item % 2 === 0 ? "even" : "odd"));

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
array6.map((item) => (item < 0 ? item * -1 : item));

const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
array7.map((item) => item.toFixed(2));

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
array8.map((item) => {
  switch (item) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
});

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
array9.map((item) => Math.sqrt(Math.sqrt(item)));

const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: ["apple", "banana", "watermelon"]
array10.map((item) => item.name);

const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: [14, 18, 32]
array11.map((item) => item.age);

const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
array12.map((item) => item.name + " " + item.surname);

const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
array13.map((item) => {
  let age = 2021 - item.birth.slice(0, 4);
  return { ...item, age };
});

const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

const MONTH = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

array14.map((item) => {
  let name = item.name;
  let date = item.birth.slice(-2);
  let month = item.birth.slice(5, 7);
  let monthName = MONTH[month - 1].toLowerCase();
  let year = item.birth.slice(0, 4);

  return `<tr><td>${name}</td><td>${date} ${monthName} ${year}</td></tr>`;
});
