let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");

let currentLine = 0;
function readline() {
  return input[currentLine++];
}

function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return [];
}

function solve() {
  let n = parseInt(readline());
  let arr = readline().split(" ").map(Number);
  let target = parseInt(readline());

  let result = twoSum(arr, target);
  console.log(result.join(" "));
}

solve();