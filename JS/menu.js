let btn=document.querySelectorAll(".menu p");

Array.from(btn).forEach((elem)=>{
    elem.addEventListener("click",()=>{
        // console.log(elem.innerHTML.trim());
        if(elem.innerHTML.trim()=='Start Game'){
            window.location.href="cpu.html";
        }
    });
});

