const s = Number(process.argv[2]);

if (isNaN(s)) process.exit();

for (let i = 1; i <= s; i++) {
  console.log("*".repeat(i));
}
