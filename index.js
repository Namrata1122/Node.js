// const add = require('./add');

// console.log("Hello from index.js");
// const sum = add(1,2);
// const sum2 = add(2,3);
// console.log(sum);
// console.log(sum2);

// require("./batman");
// require("./superman");

// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

// const SuperHero = require("./super-hero");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("SUperman");
// console.log(superman.getName());


// for importing more than one variables and functions

// const math = require('./math');
// console.log(math.add(2,3));
// console.log(math.subtract(2,3));


// const math = require('./math');
// const {add,subtract} = math;
// console.log(add(2,3));
// console.log(subtract(2,3));


// const data = require("./data.json");
// console.log(data.name);

// watch mode in node.js
// console.log("Hello Nimmi");

// ---------------------path - built in module---------------
// const path = require("node:path");
//              OR
// const path = require("path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("folder1","folder2","index.html"));
// console.log(path.join("/folder1","folder2","index.html"));
// console.log(path.join("/folder1","//folder2","index.html"));
// console.log(path.join("/folder1","//folder2","../index.html"));
// console.log(path.join(__dirname,"data.json"));

// console.log(path.resolve("folder1","folder2","index.html"));
// console.log(path.resolve("/folder1","folder2","index.html"));
// console.log(path.resolve("/folder1","//folder2","index.html"));
// console.log(path.resolve("/folder1","//folder2","../index.html"));
// console.log(path.resolve(__dirname,"data.json"));

// --------------Callbacks----------------
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function greetVishwa(greetFN){
//     const name = "VIshwas";
//     greetFN(name);
// }

// greetVishwa(greet);

// ----------------Events builtin module-----
// const EventEmitter = require("node:events");
// // Events module returns a class called EventEmitter
// const emitter = new EventEmitter();//instantiate the class

// emitter.on("order-pizza",(size, topping)=>{
//     console.log(`Order recieved, baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza",(size)=>{
//     if(size == "large"){
//         console.log("serving complimetry drinks");
//     }
// })

// console.log("Do work before event occurs in the system");
// emitter.emit("order-pizza","large","mushroom")//event is broadcasted in the code

// const PizzaShop = require("./pizza-shop.js");
// const DrinkMachine = require("./drink-machine.js")

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order",(size,topping)=>{
//     console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
//     drinkMachine.serveDrink(size);
// })

// pizzaShop.order("large","mushrooms");
// pizzaShop.displayOrderNumber();

// -----------------buffer -----------------
// const buffer = new Buffer.from("Vishwas");

// // Buffers have limited memories
// buffer.write("Code");
// buffer.write("Codevolution");

// console.log(buffer); // prints hexadecimal representation as binary representation can flood the terminal
// console.log(buffer.toJSON());
// console.log(buffer.toString());

// --------------------fs module -------------------
// fs module internally uses the buffer
// const fs = require("node:fs");

// console.log("First");
// // reading file synchronously
// const fileContents = fs.readFileSync("./file.txt");
// const fileContents2 = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);
// console.log(fileContents2);

// console.log("Second");
// // reading file asynchronously
// // the app wont freeze when multiple users use it simultaneously
// // Error first callback pattern - first argument is error
// fs.readFile("./file.txt", (error, data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });

// console.log("Third");

// fs.writeFileSync("./greet.txt","Hello world!");//creates a new text file with name greet.txt and content Hello world!

// fs.writeFile("./greet.txt"," Hello Vishwas",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File Written");
//     }
// })

// const fs = require("node:fs/promises");

// console.log("first");

// fs.readFile("file.txt","utf-8")
// .then(data=> console.log(data))
// .catch(error=>{console.log(error)});

// console.log("Second");

// async function readFile(){
//     try{
//         const data = await fs.readFile("file.txt","utf-8");
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// readFile();

// const fs = require("node:fs");
// const zlib = require("node:zlib");//allows to create zipped files

// const gzip = zlib.createGzip();

// // stream uses a buffer of default size 64 bytes 
// const readableStream = fs.createReadStream("./file.txt",{
//     encoding:"utf-8",
//     highWaterMark:2, // we now deal with 2 bytes data chunks
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeableStream = fs.createWriteStream("./file2.txt");

// // readableStream.on("data",(chunk)=>{
// //     console.log(chunk);
// //     writeableStream.write(chunk);
// // });

// readableStream.pipe(writeableStream);// returns destination stream that can be used for chaining


// -------------------HTTP built-in module-----------------
// const http = require("node:http");

// // http module also extends the eventEmitter class

// // code to respond to incoming request
// const server = http.createServer((req, res)=>{

//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello world!");
// });

// // code to listen to the incoming request
// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });//Node.js server works on port 3000


// created first API
// const http = require("node:http");
// const server = http.createServer((req, res)=>{
//     // we have to convert JS object to JSON format
//     const superHero = {
//         firstName:"Bruce",
//         lastName:"Wayne",
//     }
//     res.writeHead(200,{"Content-Type":"application/json"});
//     res.end(JSON.stringify(superHero));
// });

// // code to listen to the incoming request
// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });

// sending html as response
// for static pages
// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res)=>{

//     res.writeHead(200,{"Content-Type":"text/html"});
//     // const html= fs.readFileSync("./index.html","utf-8");
//     // res.end(html);
//     // -----------or--------
//     fs.createReadStream(__dirname+"./index.html").pipe(res);
// });

// // code to listen to the incoming request
// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });

// for dynamic pages
// const http = require("node:http");
// const fs = require("node:fs");

// // using string replacement
// const server = http.createServer((req, res)=>{
//     const name = "Vishwas";
//     res.writeHead(200,{"Content-Type":"text/html"});
//     let html= fs.readFileSync("./index.html","utf-8");
//     html = html.replace("{{name}}",name);
//     res.end(html);
// });

// // code to listen to the incoming request
// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });


// -----------------HTTP routing ---------------
// const http = require("node:http");
// const fs = require("node:fs");

// // using string replacement
// const server = http.createServer((req, res)=>{
//     // res.end(req.url); // gives query string
//     // req.method GET POST PUT DELETE

//     if(req.url ==="/"){
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end("Home Page");
//     }else if (req.url ==="/about"){
//         res.writeHead(200,{"Content-Type":"text/plain"});
//         res.end("About Page");
//     }else if(req.url ==="/api"){
//         res.writeHead(200,{"Content-Type":"application/json"})
//         res.end(JSON.stringify({
//             firstName:"Bruce",
//             lastName:"Wayne"
//         }))
//     }else{
//         res.writeHead(404);
//         res.end("No such url exists");
//     }
// });

// // code to listen to the incoming request
// server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });

// In an enterprise level project we handle server using web framework


// -----------------libuv library -----------------
// const fs = require("node:fs");

// console.log("FIrst");

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     console.log("File Contents");
// });
// console.log("Last");

// thread pool
// const crypto = require("node:crypto");
// const start = Date.now();
// // pbkdf2- password based key derivation function 2 
// // this is a CPU intensive method that takes a long time and is ofloaded to libuv's thread pool
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Hash: ",Date.now()-start);

// increasing the thread pool size
// const crypto = require("node:crypto");
// process.env.UV_THREADPOOL_SIZE = 5;
// const MAX_CALLS = 5;

// const start = Date.now();
// for(let i=0;i<MAX_CALLS;i++){
//     crypto.pbkdf2("password","salt",10000,512,"sha512",()=>{
//     console.log(`Hash: ${i+1}`,Date.now()-start);
// });
// }

// --------------------------------------
const https = require("node:https");

const MAX_CALLS = 2;

// https.request does not use thread pool and is not effected by number of available CPU cores
const start = Date.now();
for(let i = 0;i<MAX_CALLS;i++){
    https.request("https://www.google.com",(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{
            console.log(`Request: ${i+1}`,Date.now() - start);
        });
    })
    .end();
}

