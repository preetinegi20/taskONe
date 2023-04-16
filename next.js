
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
further()

function recomend(){
    let follows=document.querySelectorAll(".follow")
   for(let i=0;i<follows.length;i++)
   follows[i].addEventListener("click",()=>{
    follows[i].innerText="Followed"
    for(let j=0;j<follows.length;j++){
        if(follows[i].innerText=="Followed"){
            follows[i].addEventListener("click",()=>{
                follows[i].innerText="Follow"
            })
        }
        }
   })
}
recomend()

function toggleActive(){
    let filter=document.querySelector(".filter-items")
    let show=document.querySelector(".toShow")
    filter.addEventListener("click",()=>{
        show.classList.toggle("active")
        show.classList.toggle("transis")
    })
}
toggleActive()