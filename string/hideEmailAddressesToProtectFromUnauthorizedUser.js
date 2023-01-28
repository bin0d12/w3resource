function protect_email(email) {
  let data = email.split("@");
  console.log(data);
  let firstName = data[0].slice(0, 5);
  let lastName = data[1].slice(0);
  console.log(firstName, "djhsfgdhk");
  console.log(lastName, "djhsfgdhk");
  let wholeNmae = firstName.concat("...@" + lastName);
  console.log(wholeNmae);
}
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
