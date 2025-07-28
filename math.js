// ---------------Pattern 1 for exporting--------
// const add = (a,b)=>{
//     return a+b;
// };

// module.exports = add;


// ------Pattern 2 for exporting----------------
// module.exports = (a,b)=>{
//     return a+b;
// };

// --------------pattern 3 for exporting more than 
//               one variable or function-----------
// const add = (a,b)=>{
//     return a+b;
// };

// const subtract = (a,b)=>{
//     return a-b;
// };

// module.exports = {
//     add,
//     subtract,
// }

// ----------------pattern 4---------------
// module.exports.add =(a,b)=>{
//     return a+b;
// };
// module.exports.subtract=(a,b)=>{
//     return a-b;
// };

// -------------pattern 5-----------------
exports.add =(a,b)=>{
    return a+b;
};
exports.subtract=(a,b)=>{
    return a-b;
};
