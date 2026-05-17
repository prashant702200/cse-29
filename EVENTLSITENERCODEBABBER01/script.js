// let fpara = document.getElementById('fpara')
// fpara.textContent = "oye yeah eyes";

// fpara.addeventlisteer("event name",, listiner) 
function changetext(){
   let fpara = document.getElementById('fpara')
   fpara.textContent = "ohh yec=ah"; 
}
 let fpara = document.getElementById('fpara')
 fpara.addEventListener('click' , changetext);

 let paras = document.querySelectorAll('p');
 for(let i=0; i<=paras.length ;i++){
   let para = paras[i];
   para.addEventListener('click' , function(){
      alert('ha bhai daba di tune aah' + Event.AT_TARGET.textContent);
   })
 }