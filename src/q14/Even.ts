const input = Number(process.argv[2]);

if (isNaN(input)){
    process.exit();
}

for (let i = 0; i <= input; i++){
    if (i % 2 == 0){
        console.log(i);
    }

}

