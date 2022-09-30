/*
const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
}else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

/*
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are able to vote.");
}
*/

/*
let raining = false;

if (!raining) {
  console.log("Leave your umbrella at home!");
} else {
  console.log("Better bring an umbrella!");
}
*/

/* let solution = 1;
for (let x = 1; x <= 12; x++){
  solution *= x;
}
console.log(solution);
*/

let rows = "";
let seats = "";

for (let x = 0; x < 26; x++){
  for (let y = 0; y < 100; y++){
    let rows = x;
    let seats = y;
    console.log(rows + "-" + seats);
  }
}