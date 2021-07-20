document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const overlay = document.querySelector(".overlay");

window?.addEventListener("load", function () {
    overlay.style.display = "none";
});


const send = async () => {

    console.log("entrou");

    console.log(document.querySelector("#e-mail"));
    console.log(document.querySelector("#name"));
    console.log(document.querySelector("#message"));

    const response = await fetch('https://ruanminiguite.wixsite.com/my-site/_functions/enviarEmail', {
      method: 'POST',
      body: {
        "email" : document.querySelector("#e-mail"),
        "name" : document.querySelector("#name"),
        "msg" :  document.querySelector("#message")
      }, 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); 

  }