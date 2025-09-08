const initialTime2 = performance.now();

for (let i = 0; i <= 100; i++) {
  for (let j = 100; j >= 0; j--) {
    console.log("i and j are ", i, j);
  }
}
const endTime2 = performance.now();

const time2 = endTime2 - initialTime2;

console.log(Math.trunc(time2));
