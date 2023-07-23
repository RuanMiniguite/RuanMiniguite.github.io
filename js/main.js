const overlay = document.querySelector(".overlay")

window?.addEventListener("load", function () {
    overlay.style.display = "none"
});

//sidebar
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("#IconMouseAndFone").style.display = "none";
    } else {
        document.querySelector("#IconMouseAndFone").style.display = "block";
    }
}
