import fs from "fs"

// console.log("Hello Sumant,How are you");

// const result = fs.readFileSync("./syncasync.txt","utf-8")        //....Blocking
// console.log(result);


// console.log("Hello Shubhangi");

console.log("Hello Sumant,How are you");

fs.readFile("./syncasync.txt","utf-8",(err, result)=>{             //......Non-Blocking
    console.log(result); 
    
})       


console.log("Hello Shubhangi");

