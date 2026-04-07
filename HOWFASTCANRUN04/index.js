

// code1 
// const t1 =performance.now();
// for(let i=0;i<100;i++){
//     let para =document.createElement("p");
//     para.textContent ="this is paragraph" + i;
//     document.body.appendChild(para);
// }
// const t2  =performance.now();
// console.log("total time taken by code :" (t2-t1));




// //code2
// const t3 = performance.now();
// let mydiv = document.createElement("mydiv");
// for(let i=0;i<100;i++){
//     let para =document.createElement("p");
//     para.textContent ="this is paragraph" + i;
//     document.body.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 =performance.now();
// console.log("this is my spped :", (t4-t3));

let fragment = document.createDocumentFragment();
for(let i=1;i<100;i++){
    let para =document.createElement("p");
    para.textContent ="this is my para " + i +100;
    fragment.appendChild(para);
}
//this take one reoaint and one repair
document.body.appendChild(para);