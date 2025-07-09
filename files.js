import fs from 'fs'


 
// fs.writeFileSync('./test.txt',"I love you shubhangi")                  //Sync    .... Blocking
                

// fs.writeFile('./test2',"I love You shubhangi again",(err)=>{})           //Async   ....Non-Blocking


// const result = fs.readFileSync("./mylove.txt","utf-8")                   //Sync
// console.log(result);

// fs.readFile("./mylove.txt","utf-8",(err,result)=>{                      //Async
//     if(err){
//         console.log("Error: ",err);
        
//     }else{
//         console.log(result);
        
//     }

// })


// fs.appendFileSync("./mylove.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("./mylove.txt","\nI Love You Shubhangi")

// fs.cpSync("./test.txt","./copy.txt")

// fs.unlinkSync("./copy.txt")



console.log(fs.statSync("./test.txt").isFile());

fs.mkdirSync("./shubhangi.txt")

