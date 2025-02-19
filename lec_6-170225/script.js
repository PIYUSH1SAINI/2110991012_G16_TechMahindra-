// // // // var count = 0;

// // // //Closures in event listners
// // // function helper() {
// // //   var count = 0;

// // //   document.getElementById("btn-click").addEventListener("click", function () {
// // //     count++;
// // //     console.log("clicked");

// // //     console.log("helper - " + count);
// // //   });
// // // }

// // // function helper1() {
// // //   var count = 0;

// // //   document.getElementById("btn-click1").addEventListener("click", function () {
// // //     count++;
// // //     console.log("clicked 1");

// // //     console.log("helper 1 - " + count);
// // //   });
// // // }

// // // helper();
// // // helper1();

// function ReachedRestuarant(callBack) {
//   console.log("Reached Restuarant");
//   setTimeout(callBack, 1000);
// }

// function TableFinding(callBack) {
//   console.log("Table Finding");
//   setTimeout(callBack, 2000);
// }

// function MenuDiscovery(callBack) {
//   console.log("Menu Discovery");
//   setTimeout(callBack, 3000);
// }

// function PriceChecking(callBack) {
//   console.log("Price Checking");
//   setTimeout(callBack, 4000);
// }

// function StatersOrder(callBack) {
//   console.log("Staters Order");
//   setTimeout(callBack, 5000);
// }

// function MainCourseOrder(callBack) {
//   console.log("Main Course Order");
//   setTimeout(callBack, 6000);
// }

// function DessertOrder(callBack) {
//   console.log("Dessert Order");
//   setTimeout(callBack, 7000);
// }

// function BillPayment(callBack) {
//   console.log("Bill Payment");
//   setTimeout(callBack, 8000);
// }

// //chaining the callbacks

// // ReachedRestuarant(
// //   TableFinding(
// //     MenuDiscovery(
// //       PriceChecking(StatersOrder(MainCourseOrder(DessertOrder(BillPayment()))))   //not good practice to do this , not readable
// //     )
// //   )
// // );

// ReachedRestuarant(() => {
//   TableFinding(() => {
//     MenuDiscovery(() => {
//       PriceChecking(() => {
//         StatersOrder(() => {
//           MainCourseOrder(() => {
//             DessertOrder(() => {
//               BillPayment(); //this is good practice (pyramid of doom)
//             });
//           });
//         });
//       });
//     });
//   });
// });

// // PROMISE

// ReachedRestuarant(function () {
//   console.log("I reached the place");
// })
//   .then(TableFinding)
//   .then(MenuDiscovery)
//   .then(PriceChecking)
//   .then(StatersOrder)
//   .then(MainCourseOrder)
//   .then(DessertOrder)
//   .then(BillPayment);

// const myRestaurantPromise = new Promise(reslove,reject){
//     if(1:30 < time < 2:30){
//         reslove("Reached the restuarant")
//     }
//     else{
//         reject("Reached late")
//     }
// }
