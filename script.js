document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const overlay = document.querySelector(".overlay");

window.addEventListener("load", setTimeout(function () {
    overlay.style.display = "none";
}, 1000))

//document.oncontextmenu = document.body.oncontextmenu = function() {return false;}