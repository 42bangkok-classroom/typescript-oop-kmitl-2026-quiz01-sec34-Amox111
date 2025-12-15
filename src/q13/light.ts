const light = String(process.argv[2]);

switch (light.toLocaleLowerCase()){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Caution");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Unknown");
}