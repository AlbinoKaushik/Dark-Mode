let btn = document.querySelector(".light");
let currMode = "light";
btn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        btn.style.backgroundColor = "black";
        let body = document.querySelector("body");
        body.style.backgroundColor = "black";
        btn.setAttribute("class","dark");
        
      }  else{
          currMode = "light";
          btn.style.backgroundColor = "white";
          let body = document.querySelector("body");
        body.style.backgroundColor = "white";

        btn.setAttribute("class","light");
        }
        console.log(currMode);
});