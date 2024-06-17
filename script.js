let heading=document.getElementById("name");
let para=document.getElementById("para");
let submission;

function register(){
    heading.innerHTML="REGISTER";
    heading.style.color='aliceblue';
    para.innerHTML="already registred";
    para.addEventListener("click",()=>{
        heading.innerHTML="LOGIN";
    });
}

