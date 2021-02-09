window.onload = function() {
  console.log("Hello Rigo from the console!");
  findNumber(11, myArray);
  findNumber(42, myArray);
};

const myArray = [1, 2, 3, 42, 7, 8, 4, 0, 33, 36];

function findNumber(num, arr) {
  console.log(arr.includes(num));
  //arr.includes(num);
}