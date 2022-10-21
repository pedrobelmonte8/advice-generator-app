//Variables
const REST_API_URL = "https://api.adviceslip.com/advice";
const contentQuote = document.querySelector(".content");
const contentID = document.querySelector(".id");
const btnGenerator = document.querySelector("#btnGenerator");

//Eventos
window.addEventListener("load", generateQuote);
btnGenerator.addEventListener("click", generateQuote);

//Funciones
function generateQuote() {
  fetch(REST_API_URL)
    .then((response) => response.json())
    .then((data) => printQuote(data));
}

function printQuote(datos=false) {
  if(datos){
  const { id, advice } = datos.slip;
  contentID.innerHTML=`#${id}`;
  contentQuote.innerHTML=`"${advice}"`;
  }else{
    contentQuote.innerHTML=`"Not quotes today :("`;
    contentID.innerHTML=`#`;
  }
  
}
