var resultat = Math.round(Math.random() * 100);
var proposition = document.getElementById('proposition');
var bouton = document.getElementById('bouton');
var reponse = document.getElementById('reponse');
var compteur = 0;

function afficher() {
    compteur++;
    if (compteur < 8) {
        if (proposition.value > resultat) {
            reponse.innerHTML = "C'est plus petit !! Il vous reste " + (8 - compteur) + " essai(s)";
        } else if (proposition.value < resultat) {
            reponse.innerHTML = "Visez plus haut ! Il vous reste " + (8 - compteur) + " essai(s)";
        } else if (proposition.value == resultat) {
            reponse.innerHTML = "Wahou ! Bien joué !";
        }
    } else {
        reponse.innerHTML = "Vous avez perdu ! La solution était : " + resultat;
    }
}

bouton.addEventListener('click', afficher, false);