const reg=document.getElementById("content3");
reg.addEventListener("submit"),(e)=>{
    e.preventdefault()
    const c1=document.getElementById("cf3");
    const c2=document.getElementById("cf6");
    const c3=document.getElementById("cf9");
    if(c1.value=="Paris") && (c2.value=="Mars") && (c3.value=="Atlantic"){
        alert("your score is 100%");
    }
    
}
