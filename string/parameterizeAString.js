function string_parameterize(str) {
  return str.toLowerCase().split(" ").join("-");
}
console.log(string_parameterize("Robin Singh from USA.")); //"robin-singh-from-usa"
