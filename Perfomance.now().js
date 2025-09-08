const initialTime = performance.now();

for (let i = 0; i <= 100; i++) {
  for (let j = 100; j >= 0; j--) {
    console.log("i and j are ", i, j);
  }
}
const endTime = performance.now();

const time = endTime - initialTime;

console.log(Math.trunc(time));
