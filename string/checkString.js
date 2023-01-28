let string1 = function (str) {
  // you can use this down line also
  // if(Object.prototype.toString.call(str) === '[object String]'){
  if (typeof str === "string") {
    console.log("Variable is a string");
  } else {
    console.log("Variable is not a string");
  }
};
string1("binod");
string1([1, 2, 4, 0]);

// is_string = function(input) {
//     if (Object.prototype.toString.call(input) === '[object String]')
//       return true;
//     else
//       return false;
//       };
//   console.log(is_string('w3resource'));
//   console.log(is_string([1, 2, 4, 0]));
