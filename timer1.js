const args = process.argv.slice(2);
let delay;
for (const time of args) {
  if (!args) {
    return;
  }
  if (Number(time) < 0 || !Number(time)) {
    continue;
  }
  delay = Number(time) * 1000;
  setTimeout(() => {
    process.stdout.write("\x07");
  }, delay);
}