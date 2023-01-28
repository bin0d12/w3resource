function truncate_string(str) {
  return str.slice(0, 4);
}

console.log(truncate_string("Robin Singh", 4));

// Extract a specific number of characters from a string

function truncate_string1(str, length) {
  return str.slice(str, length);
}

console.log(truncate_string1("Robin Singh", 5));
