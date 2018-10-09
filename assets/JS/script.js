var submit = document.getElementById('submit');//recupère l'id de submit dans le formulaire//
var firstNumber = document.getElementById('firstNumber');//recupère l'id du premier nombre dans le formulaire//
var secondNumber = document.getElementById('secondNumber');//recupère l'id du deuxième nombre dans le formulaire//
var regexDecimal = /^[\d][.,][\d]$/;//défini le regex//

submit.addEventListener("click", function () { //création de la fonction après le click sur Valider//

if (regexDecimal.test(firstNumber.value)){ //création des conditions par rapport au regex//
  if (regexDecimal.test(secondNumber.value)){ //création des conditions par rapport au regex//

      alert(result = Math.trunc(firstNumber.value) * secondNumber.value); //affichage du résultat//
    }
  else {
    alert("choisissez un nombre décimal pour deuxième nombre");
  }
}
else {
  alert("choisissez un nombre décimal pour premier nombre");
}
})
