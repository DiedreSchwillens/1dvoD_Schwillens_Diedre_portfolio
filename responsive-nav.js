//geraadpleegde bron: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function myFunction() {
    let x = document.getElementById("responsiveNav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}