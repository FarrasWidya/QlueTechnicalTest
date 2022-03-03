/*
In the language of your choice, write a function which, taking a positive integer n as input, finds all sets
of numbers that sum up to n.
For example, n=4, we have: 4
3,1
2,2
2,1,1
1,1,1,1
Note that 2,1,1 is same as 1,2,1 or 1,1,2.
*/


function showAllSets(arr) {
  if (arr.length != 1) {
    console.log(arr) // output final
  }
}
function findAllSets(arr, i, n) {
  if (n == 0)
    showAllSets(arr);
  for (var j = i; j <= n; j++) {
    arr.push(j);
    findAllSets(arr, j, n - j);
    arr.pop();
  }
}
let n = 4; // input
let arr = [];
findAllSets(arr, 1, n);

