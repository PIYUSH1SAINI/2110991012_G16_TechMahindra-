// //set timeOut example testcase

// function two(){
//     return 2;
// }

// function four(){
//     return 4;
// }

// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3);
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(3);
// },5000)
// console.log(6);

// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }

//     return y;
// }

// var z=x();
// console.log(z);

// z();

// //closer
// function z(){
//     var b=900;

//     function x(){
//         var a=7;

//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// //count var program - 1
// var count = 0;

// function increment() {
//   count++;
// }

// increment();
// increment();
// increment();

// console.log(count);

// // closer of the upper program
// function helper() {
//   var count = 0;

//   function increment() {
//     count++;
//   }

//   increment();
//   increment();
//   increment();

//   console.log(count);
// }

// helper();

// //HOF (higher order function)
// function helper() {
//   var count = 0;

//   return function increment() {
//     count++;

//     console.log(count);
//   };
// }

// var counter1 = helper();
// counter1();
// counter1();

//HOF (higher order function) - 2
function helper() {
  var count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new helper();

counter1.increment();
counter1.increment();
counter1.decrement();
