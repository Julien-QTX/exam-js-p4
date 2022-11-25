/ récupérer les infos du form
var compte = document.querySelector("#compte");
var somme = document.querySelector("#somme");

console.log(compte)
console.log(somme)

//on vérifie les infos du compte en banque 

if (compte.lenght == 16) {
    validc = 'valide';
    //si le numéro est valide on change sa couleur 
    compte.style.backgroundColor = "#6eff33"; 
  } else {
    validc = 'non valide';
    erreur_alert()
  }

//on vérifie que la somme est correct (>0)

if (somme > 0) {
    valids = 'valide';
    somme_alert
  } else {
    valids = 'non valide';
    erreur_alert()
  }


//création du fonction pour les alert
//fonction alert (somme envoyé)

function somme_alert() {
    alert("xxxxxx");
  }

//fonction alert (erreur)

function erreur_alert() {
    alert("Erreur sur le champs")
}
