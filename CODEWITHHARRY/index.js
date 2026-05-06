var age =90;
if (age>18){
    console.log("you are eligible")
}
else {
    console.log("you are not eligible ")
}
 
// dom manipulation 
  let ele = document.getelementby("click");
  console.log(ele)


  let eleclass = document.getElementsByClassName("container")
  console.log(eleclass)

//   eleclass[0].style.background = "yello";
  eleclass[0].classList.add("textsucces")
  console.log(ele.innerhtml)
  console.log(ele.innerhtml)

  tn = document.getElementsByTagName("div")
  console.log(tn) 
  createdchild = document.createdchild("p")
  createdchild.innertext = "hello this is code babber"
  tn[0].appedchid(createdchild)