class human{
   //properties 
   age =15;
   #wt =79;
   hig =5.8;

   //behaviour 
   walking(){
    console.log("he is running "); 
 }
 running (){
    console.log("he is runnnnnging" , this.#wt);
 }
 

}
let object = new human;
console.log(object.age)
// console.log(object.wt)
object.running()

//default parameter ki value ko passs keta huin

function sayname(myname = "prashant singh "){
   console.log("my name is :", myname)
} sayname("love babber");
sayname()




// function object(value = {age :10 , wt :38 , hight:5.8}){
//     console.log("hello jee  ", value);
// }
// object(); 


function object(value = ["love" ,"babber"]){
    console.log("hello jee  ", value);
}

object(); 
//

function getage(){
   return 190;
}
function utility(value= "prashant singh", age =getage()){
   console.log( value , " ", age )

}
utility()