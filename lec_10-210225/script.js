// // CALL, APPLY, BIND

// let studentSahil = {
//   firstName: "Sahil",
//   lastName: "Aggarawal",

//   getResult: function () {
//     console.log("Passed");
//   },

//   // getName: function () {
//   //   console.log(this.firstName + " " + this.lastName);
//   // },
// };

// // var print = studentSahil.firstName + " " + studentSahil.lastName;
// // console.log(print);
// // // console.log(studentSahil.getResult());
// // console.log(studentSahil.getName());

// let getName = function (classStudent, test, marks) {
//   console.log(
//     this.firstName +
//       " " +
//       this.lastName +
//       " from class " +
//       classStudent +
//       " " +
//       test +
//       " " +
//       marks
//   );
// };

// let studentJasjot = {
//   firstName: "Jasjot",
//   lastName: "Singh",

//   getResult: function () {
//     console.log("Passed");
//   },
// };

// //call and bind both are auto called but in bind it will not call itself we have to call it
// const student1 = getName.call(studentSahil, "G16", "12", "99"); // here student -> function to be called and G16 -> classStudent , the second place have the arguments and first place is the one to call
// const student2 = getName.apply(studentJasjot, ["G16,G14,G15"], "12", "99"); // Jasjot Singh from class G16,G14,G15 undefined undefined -> in apply it only takes 1 argument if we pass more then it will say undefined but in call we can pass as many argumets we like
// const getStudentBind = getName.bind(studentSahil, ["G16,G14,G15"], "12", "99"); //this works exaclty like call but only 1 diff that it does not call itself
// console.log(getStudentBind());

// // console.log(student2);

// // console.log(getName(studentJasjot));

document
  .getElementById("searchBox")
  .addEventListener("input", debouncingFunction);

let whichCall = 0;

function fetchData() {
  console.log("Fetching API data", whichCall++);
}

function debouncingFunction() {
  setTimeout(fetchData, 2000);
}
