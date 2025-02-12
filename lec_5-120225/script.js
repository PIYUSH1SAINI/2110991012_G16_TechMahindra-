// javaScript is a sync and the async is a function in it
//it will first follow the sycn and then it goes the call backs

// console.log(1);
// console.log(sumOfTwo(10, 5));
// function sumOfTwo(a, b) {
//   return a + b;
// }
// setTimeout(console.log(4), 2000);
// var start = 1;
// var end = 1000000000000;

// while (start < end) {
//   start++;
// }

// console.log("End");

// setInterval(console.log(9), 4000);

// TYPES OF FUNCTIONS -

// var anomanyus = function () {
//   console.log("anomanyus function");
// };

// function named() {
//   console.log("named function");
// }

// Arrow(() => {
//   console.log("arrow function");
// });

function xyz() {
  console.log(1);
}

var abc = function cdf() {
  //The cdf function is the local scope for the abc var so it can not be accesed by GCE
  console.log(2);
};

xyz();
cdf();
