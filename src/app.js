// Minimal sample application used as the analyzable source for the
// CodeQL SAST lab. CodeQL scans interpreted languages like JavaScript
// without a build step.

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function main() {
  console.log(greet("world"));
  console.log(`2 + 3 = ${add(2, 3)}`);
}

main();

module.exports = { greet, add };
