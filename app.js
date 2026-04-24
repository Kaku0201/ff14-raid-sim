document.querySelectorAll(".spot").forEach(btn=>{
 btn.addEventListener("click",()=>{
   alert("You selected "+btn.innerText);
 });
});

document.getElementById("generate")
.addEventListener("click",()=>{
 alert("Random mechanic later!");
});
