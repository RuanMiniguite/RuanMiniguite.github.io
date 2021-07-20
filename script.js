document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const overlay = document.querySelector(".overlay");

window?.addEventListener("load", function () {
    overlay.style.display = "none";
});


const send = async () => {
    event.preventDefault();

    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("message").value;
    

    console.log(nome);
    console.log(email);
    console.log(msg);

    body = {
        "email" : nome,
        " name" : email,
        "msg" :  msg
    }

    dopost(body);

  }

function dopost(body){
    let request = new XMLHttpRequest()
    let url = "https://ruanminiguite.wixsite.com/my-site/_functions/enviarEmail"

    request.open("POST", url, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}