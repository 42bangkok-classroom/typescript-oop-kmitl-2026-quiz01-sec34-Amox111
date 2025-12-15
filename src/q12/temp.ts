const temp = Number(process.argv[2]);
if (isNaN(temp)) {
    console.log("Invalid");
    process.exit();
}

if (temp > 30){
    console.log("Hot");
} else {
    console.log("Normal");
}
