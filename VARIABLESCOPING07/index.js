//global scope 
var age =15;
console.log(age);

{
    console.log(age)
}
for(i=0;i<4;i++){
    console.log(age);
}
function shinchin(){
    console.log("babber" ,age );
}
shinchin();
//function scope //


sayhello()
function sayhello(){
    var fullname= "babber";
    console.log("hello jee kaie ho sare", fullname)
}

//block scope 
{
    var age =100;
    
}
console.log(age)


console.log(age)
console.log("babber")
console.log("love")
var marks = 24;
//temporal dead jone question in intreview


    

