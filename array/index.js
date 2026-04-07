//array is a heap memoory location 
// obeject collection of key value pair "babber " hight =26
// let arr = [1,2,3,4,5,6,6,8,9];
// console.log(arr)
// let brr = new Array( 69 ,"babber ");
// brr.push("babber");
// console.log(brr);
// brr.pop();

// spice 
// let brr1 = ( "babber" , "love"  ,677 , "bravo");
// console.log(brr1); 
// brr.splice(1,0,"lovebabber")
// console.log(brr);
  
let arr1 =[1,2,3,4];
let ansarray = arr1.map((num) =>{
    return num*num;

});
console.log(ansarray);

let arr2 =[1,2,3,4,5];
arr2.map((number) => {
    console.log(number-2);

})
let arr3 =[1,2,3,53,54,35,6,67,4,34,234534,657,8,645,4,3,2345,456,568,65,34,532,24,37,458,5659,7,978,6345,2,57];
  let evenarray =arr3.filter((number) =>{
    if(number%2==0){
        return true;
    }
    else{
        return false;
    } 

 })
 console.log(evenarray)
 

 let arr4 =[1,2,3,4];
 let answer = arr4.reduce((acc,curr)=>{
    return acc+ curr;
 } ,0)
 console.log(arr4);


 let arr5 =[6,4,3,3,2,6,7,8,9];
 arr5.sort();
 console.log(arr5); //use dfor shorting
 console.log(arr5.indexOf(7))
 
let arr6 =[10,20,30,40];
let length =arr6.length;
console.log("length :" , length)

arr6.forEach((value,index) =>{
    console.log("value" , value ,"index",index);

})

let arr7 =[1,2,3,4,5,5,6,6,78,99]
for(let value of arr7){
    console.log(value);
} 
 
let string1 = "babber";
for(let val of string1 ){
    console.log(val);
}
 