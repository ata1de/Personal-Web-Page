const icon_theme = document.querySelector(".img_theme")

function tooggleTheme(){
    document.body.classList.toggle("light")
    if (document.body.classList.contains("light")){
        icon_theme.setAttribute("src", "assets/icons8-crescent-moon-50.png")
    } else {
        icon_theme.setAttribute("src", "assets/icons8-sun-50.png")
    }
    
}
icon_theme.addEventListener("click", () =>{
    tooggleTheme()
})