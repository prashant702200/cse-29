let src ={
    age : 25,
    wt : 28,
    ht : 6.5
}
// let dest = {...src};
// dusara tarika obejct assign kerne ka 

let src2 ={
    value :"babber",
    age :900,
    


}


let dest = Object.assign({}, src ,src2)
src.age = 90;

console.log("my source :", src);
console.log("my destine :", dest);
// iske refrence ko copy ker reha hain ....


//10 number wla yahi ker reah custom error 
let errorcode = 100;
if(errorcode==100){
    throw new error("invalid jaison");
    
}