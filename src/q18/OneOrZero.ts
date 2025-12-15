const numm = Number(process.argv[2]);

if (isNaN(numm)){
    for (let i = 0; i < numm; i++)
        if(i % 2 === 0){
            console.log("1".repeat(numm));
        } else {
            console.log("0".repeat(numm));
        }
} else {
    console.log("Invalid");
    process.exit();
}