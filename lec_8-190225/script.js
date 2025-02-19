//Reduce

//sum of array

// const arr = [1, 23, 4, 5, 4, 15];
// var sumOfArray = 0;

// for (var i = 0; i < arr.length; i++) {
//   sumOfArray += arr[i];
// }

// console.log(sumOfArray);

// //Reduce for the sum of array
// const ans = arr.reduce(function (acc, curr) {
//   // acc -> acculmulator, curr -> current value
//   acc = acc + curr;
//   return acc;
// }, 0); //0 -> initial value of acc

// console.log(ans);

// const users = [
//   { firstName: "Pratiyush", lastName: "Ray", age: 25 },
//   { firstName: "Piyush", lastName: "Saini", age: 22 },
//   { firstName: "Sahil", lastName: "Aggarwal", age: 20 },
//   { firstName: "Ayush", lastName: "Jawa", age: 22 },
//   { firstName: "Daksh", lastName: "Singh", age: 40 },
// ];

// const ans = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = 1;
//   } else {
//     acc[curr] += 1;
//   }
// }, {});

// console.log(ans);

// //max number in array

// arr = [2, 4, 7, 19, 35, 1, 8];
// var maxNum = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (maxNum < arr[i]) {
//     maxNum = arr[i];
//   }
// }

// console.log(maxNum);

// //reduce - max number in array

// const ans = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }

//   return acc;
// });

// console.log(ans);

// const cart = ["shoe", "shirt", "glasses", "watch", "bags"];

//// call back method
// createOrder(cart,callback){
//   console.log("ORDER CREATION")

//   orderPayment(orderId, callback){
//   console.log("ORDER PAYMENT")

//     orderSummary(orderId, callback){
//       console.log("ORDER SUMMARY")

//       updateWallet(){
//         console.log("WALLET UPDATE")
//       }
//     }
//   }
// }

// PROMISE

const cart = ["shoe", "shirt", "glasses", "watch", "bags"];

function createOrder(cart) {
  const myPromise = new Promise(function (resolve, reject) {
    if (cart.length > 0) {
      console.log("Order created successfully");

      resolve("12345");
    } else {
      const err = new Error("ORDER FAILED");
      reject(err.message);
    }
  });

  return myPromise;
}

function orderPayment(orderId) {
  console.log("Order Payment successful", orderId);
}

function orderSummary(orderId) {
  console.log("Order summary creater");
}

function updateWallet() {
  console.log("Wallet update");
}

console.log(createOrder(cart));

createOrder(cart)
  .then(function (orderId) {
    return orderPayment(orderId);
  })
  .then(function (orderId) {
    return orderSummary(orderId);
  })
  .then(function () {
    return updateWallet();
  })
  .catch(function (err) {
    console.log("ORDER FAILED");
    console.log(err.message);
  });

// createOrder(cart)
//   .then(function orderPayment(orderId) {
//     console.log("Order Payment Successful", orderId);
//   })
//   .then(function orderSummary(orderId) {
//     console.log("Order Summary", orderId);    //orderId = undefinded cause we are not returning the orderId
//   });

// createOrder(cart);
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet);
