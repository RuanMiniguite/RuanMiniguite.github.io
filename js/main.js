//sidebar
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

// icone mouse apagar quando pagina sair do topo
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("#I-mouse").style.display = "none";
    } else {
        document.querySelector("#I-mouse").style.display = "block";
    }
}