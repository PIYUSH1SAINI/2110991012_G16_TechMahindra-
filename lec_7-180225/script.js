// //higher order function

// data = [2, 4, 6, 8, 10];
// console.log("data array - " + data);

// //doube data
// const calculateDoubleData = function (data) {
//   const output = [];

//   for (let i = 0; i < data.length; i++) {
//     output.push(data[i] * 2);
//   }

//   return output;
// };

// console.log("Double data - " + calculateDoubleData(data));

// //devide by 2
// const calculateDevideData = function (data) {
//   const output = [];

//   for (let i = 0; i < data.length; i++) {
//     output.push(data[i] / 2);
//   }

//   return output;
// };

// console.log("devide by 2 data - " + calculateDevideData(data));

// //add 10
// const calculateAddTen = function (data) {
//   const arr = [];

//   for (let i = 0; i < data.length; i++) {
//     arr.push(data[i] + 10);
//   }

//   return arr;
// };

// console.log("add 10 - " + calculateAddTen(data));

// //dynamic use of functions
// data = [2, 4, 6, 8, 10];
// console.log("data array - " + data);

// function double(insideData) {
//   var ans = insideData * 2;
//   return ans;
// }

// function half(insideData) {
//   var ans = insideData / 2;
//   return ans;
// }

// function add10(insideData) {
//   var ans = insideData + 10;
//   return ans;
// }

// const calculateData = function (data, callback) {
//   var output = [];

//   for (let i = 0; i < data.length; i++) {
//     output.push(callback(data[i]));
//   }

//   return output;
// };

// console.log(calculateData(data, double));
// console.log(calculateData(data, half));
// console.log(calculateData(data, add10));

//using MAP function
// Array.prototype.mapp = function (logic) {
//   var output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }

//   return output;
// };

// console.log(data.mapp(double));

//Task -
// calculate diameter
// calculate circumference
// calculate area

// data = [2, 9, 16, 42, 71];
// console.log("Radius - " + data);

// function diameter(value) {
//   var num = value * 2;
//   return num;
// }

// function circumference(value) {
//   var sum = 2 * 3.14 * value;
//   return sum;
// }

// function area(value) {
//   var area = 3.14 * (value * value);
//   return area;
// }

// Array.prototype.mapp = function (logic) {
//   var output = [];

//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }

//   return output;
// };

// console.log(data.mapp("Diameter - " + diameter));
// console.log(data.mapp("Circumference - " + circumference));
// console.log(data.mapp("Area - " + area));

// data = [1, 3, 6, 8, 7, 10];

////simple method
// function filterOdd(data) {
//   var res = [];

//   for (var i = 0; i < data.length; i++) {
//     if (data[i] % 2 != 0) {
//       res.push(data[i]);
//     }
//   }

//   return res;
// }

// console.log(filterOdd(data));

////prototype method
// function filterOddNumber(insideData) {
//   if (insideData % 2 != 0) {
//     return insideData;
//   }
// }

// Array.prototype.mapp = function (logic) {
//   var arr = [];

//   for (var i = 0; i < this.length; i++) {
//     arr.push(logic(this[i]));
//   }

//   return arr;
// };

// console.log(data.mapp(filterOddNumber));

// const users = [
//   { firstName: "Pratiyush", lastName: "Ray", age: 25 },
//   { firstName: "Piyush", lastName: "Saini", age: 22 },
//   { firstName: "Sahil", lastName: "Aggarwal", age: 20 },
//   { firstName: "Ayush", lastName: "Jawa", age: 28 },
//   { firstName: "Daksh", lastName: "Singh", age: 40 },
// ];

// // Combine first and last name
// const FullName = users.map((user) => user.firstName + " " + user.lastName);
// console.log(FullName); // Output: ["Pratiyush Ray", "Piyush Saini", "Sahil Aggarwal", "Ayush Jawa", "Daksh Singh"]

// // Filter out users above 24 and their full name
// const above24 = users
//   .filter((user) => user.age > 24)
//   .map((user) => user.firstName + " " + user.lastName);
// console.log(above24); // Output: ["Pratiyush Ray", "Ayush Jawa", "Daksh Singh"]
