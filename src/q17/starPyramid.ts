const star = parseInt(process.argv[2]);

if (isNaN(star)) process.exit();

for (let i = 1; i <= star; i++) {
  console.log("*".repeat(i));
