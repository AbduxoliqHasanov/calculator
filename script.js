window.addEventListener("DOMContentLoaded",()=>{
    const result=document.querySelector("#result");
    const buttons=document.querySelectorAll("input[type=button]");
    buttons.forEach(element=>{
        element.addEventListener("click",()=>{
            if(result.value=="undefined" || result.value=="+" || result.value=="-" || result.value=="/" || result.value=="*" ||result.value=="0" || result.value=="Infinity"){
                result.value="";
            }
            
        })
    })
})
