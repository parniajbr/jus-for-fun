function solve(n) {
  return 2 ** n - 1;
}

let number = Number(prompt("please enter number", 3));

alert("your minimum move is " + solve(number));