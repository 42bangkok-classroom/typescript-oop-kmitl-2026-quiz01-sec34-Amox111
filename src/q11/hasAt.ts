const has = process.argv[2];

if (has == undefined){
    console.log("has");
}

if (has.includes("@")){
    console.log("Has @");
} else {
    console.log("No @");
}