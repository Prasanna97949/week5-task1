var captcha = document.getElementById("captcha")
var input = document.getElementById("input")
var button = document.getElementById("btn")

button.addEventListener("click",function(){
    if(captcha.textContent==input.value){
        alert("Captcha submitted successfully")
    }
    else{
        alert("Captcha Wrong.Please Try Again")
    }
})