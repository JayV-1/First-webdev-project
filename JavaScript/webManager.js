const themeButton = document.getElementById("btn");
const bodyStyle = document.body

themeButton.addEventListener("click", function(){
        bodyStyle.classList.toggle("lightMode");
});