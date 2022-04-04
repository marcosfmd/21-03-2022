let hamburger = document.querySelector (".hamburger");

hamburger.addEventListener("click", function (){
    document.querySelector(".sidibar").classList.toggle("show-menu")
    document.querySelector(".hamburger").classList.toggle("show-menu")
})