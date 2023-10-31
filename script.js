const icon_theme = document.querySelector(".img_theme")
const html = document.documentElement

function tooggleTheme(){
    html.classList.toggle("light")
    if (html.classList.contains("light")){
        icon_theme.setAttribute("src", "assets/icons8-crescent-moon-50.png")
    } else {
        icon_theme.setAttribute("src", "assets/icons8-sun-50.png")
    }
    
}
icon_theme.addEventListener("click", () =>{
    tooggleTheme()
})