//sidebar
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

//Loader
const overlay = document.querySelector(".overlay");

window?.addEventListener("load", function () {
    overlay.style.display = "none";
});

//email
const send = async () => {
  event.preventDefault();
  
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;

 const response = await fetch('https://ruanminiguite.wixsite.com/my-site/_functions/enviarEmail?email='+ email +'&name=' + nome + '', {
      method: 'GET', 
      headers: {
        'User-Agent': 'PostmanRuntime/7.28.2',
        'Accept': '*/*',
        'Accept-Encoding':'gzip, deflate, br',
        'Connection': 'keep-alive'
      }
    });
    const myJson = await response.json;
    
    if(response.status === 200){
      alert("Message send! \n\nWe will be in touch! 🙂")
    }else{
      alert("Error sending message!\n\nTry again later! 🙃")
    }

  limpar();
   
}

function limpar() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
}