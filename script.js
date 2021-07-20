document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

const overlay = document.querySelector(".overlay");

window?.addEventListener("load", function () {
    overlay.style.display = "none";
});


const send = async () => {
  event.preventDefault();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append( "Access-Control-Allow-Origin", "*");
   
  var raw = JSON.stringify({
    "email": "RuanMiniguite@gmail.com",
    "name": "Ruan",
    "msg": "portifolio"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

fetch("https://ruanminiguite.wixsite.com/my-site/_functions/enviarEmail", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  
}
  // const response = await fetch('https://ruanminiguite.wixsite.com/my-site/_functions/enviarEmail', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "email" : email,
  //       "name" : nome,
  //       "msg" : msg
  //     }), 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const myJson = await response.json; 
