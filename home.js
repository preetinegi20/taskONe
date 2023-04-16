
const  icon_clicked=document.querySelectorAll(".heading .icon");
let  DdropD=document.querySelectorAll(".icon .dropD");

for(let i=0;i<icon_clicked.length;i++){
    let current=icon_clicked[i];
    current.addEventListener("click",()=>{
for(j=0;j<DdropD.length;j++){
    let relunt=DdropD[i]
    if(i===j){
   relunt.classList.toggle("showdropD")
   relunt.classList.add("showtrans")
    }
    relunt.addEventListener("mouseleave",()=>{   
   relunt.classList.remove("showdropD")
    })
}
    })
}

function further(){
let itemClicked=document.querySelector(".selected");
let joined=document.querySelector(".join-group");
let item=document.querySelector(".item")
let reveal=document.querySelector(".reveal");
joined.addEventListener("click",()=>{
    joined.classList.toggle("leaveGroup");
    reveal.classList.toggle("slow");
    itemClicked.classList.toggle("item-clicked")
})
}

function signeUp(){
    let joined=document.querySelector(".join-group");
    let acc=document.querySelector(".create-acc")
    let form=document.querySelector(".sign-upForm");
    let y=document.querySelector(".topCross")
    joined.addEventListener("click",()=>{
        form.classList.toggle("forSigned")
        form.classList.toggle("scaled")
    });
    acc.addEventListener("click",()=>{
        form.classList.toggle("forSigned")
        form.classList.toggle("scaled") 
     document.documentElement.classList.toggle("myBody");
    })
     y.addEventListener("click",()=>{
    form.classList.remove("forSigned")
    form.classList.toggle("scaled")
    document.documentElement.classList.remove("myBody");
    })
    createForm()
}
signeUp()

function createForm(){
    let form=document.querySelector(".createForm");  let formtwo=document.querySelector(".sign-upForm");
    let createfor=document.querySelector(".signIn")
    let y=document.querySelector(".createForm .topCross")
    let createactive=document.querySelector(".createnow")
    createfor.addEventListener("click",()=>{
        form.classList.toggle("forcreate")
        form.classList.toggle("scaled")
    });
    y.addEventListener("click",()=>{
        form.classList.remove("forcreate")
        form.classList.toggle("scaled")
        })
        createactive.addEventListener("click",()=>{
            form.classList.toggle("scaled");
        form.classList.remove("forcreate")
        })
        
}

 //navigation behavior on scroll
 function visible(){
    var previousScroll = window.scrollY;//0
    let header=document.querySelector(".header")
    window.addEventListener("scroll",()=>{
    let currentScroll = window.scrollY;
      if (previousScroll > currentScroll) {// 13>0
        header.style.top = "0px";
        header.style.position="fixed"
      } else {
        header.style.top = "-100px";
      }
      previousScroll = currentScroll;//previousScroll=0, currentScroll=
    })
    }
    visible()