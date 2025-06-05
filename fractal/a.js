const fs = require("fs");

const inputSream = fs.readFileSync("", "utf8");
const lines = inputSream.split("\n");
const casesCount = parseInt(lines[0]);

for (let i = 0; i < casesCount; i++)
{
    /***
     * Thtrid option
     ***/
    const [v1, v2, v3] = lines[1 + i].split(" ").map((e) => parseInt(E));

    /***
     * Second option
     ***/
    //const caseEnries = lines[1 + i].split(" ").map((e) => parseInt(E));


    //const [v1, v2, v3] = caseEnries;
    

    /***
     * First option
     ***/
    //const caseEnries = lines[1 + i].split(" ").map((e) => parseInt(E));


    //const v1 = parseInt(caseEnries[0]);
    //const v2 = parseInt(caseEnries[1]);
    //const v3 = parseInt(caseEnries[2]);
    
}

console.log("finish");