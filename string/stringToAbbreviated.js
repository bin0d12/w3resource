function abbrev_name(str) {
  let data = str.split(" ");
  // return data[0] + " " + data[1].charAt(0) + "."
  return `${data[0]} ${data[1].charAt(0)}.`;
}
console.log(abbrev_name("Robin Singh")); //"Robin S."
