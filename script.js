const icon_theme = document.querySelector(".img_theme")
const html = document.documentElement
const nav = document.querySelector(".nav_container")
const menu_icon = document.querySelector(".menu-img")

function tooggleTheme(){
    html.classList.toggle("light")
    if (html.classList.contains("light")){
        icon_theme.style.width = '30px'
        icon_theme.setAttribute("src", "assets/icons8-crescent-moon-50.png")
    } else {
        icon_theme.setAttribute("src", "assets/icons8-sun-50 white.png")
    }
    
}

menu_icon.addEventListener("click", () => {
    nav.classList.toggle("show-menu")
}
)

icon_theme.addEventListener("click", () =>{
    tooggleTheme()
})