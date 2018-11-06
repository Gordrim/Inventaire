var VueModifierObjet = (function(){
    var pageModifierObjet = document.getElementById("page-formulaire-objet").innerHTML;

    return function(objet, actionModifierObjet)
    {

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageModifierObjet;

            var titrePage = document.getElementById("titre-page").value;
            document.getElementById("titre-page").value = "Modifier l'objet";

            document.getElementById("nom-objet").value = objet.nom;
            document.getElementById("quantiter-objet").value = objet.quantiter;
            document.getElementById("valeur-objet").value = objet.valeur;
            document.getElementById("description-objet").value = objet.description;

            var formulaireModifier = document.getElementById("formulaire-objet");
            formulaireModifier.addEventListener("submit", modifierObjet);

        }

        var modifierObjet = function(evenement)
        {
            evenement.preventDefault();

            objet.nom = document.getElementById("nom-objet").value;
            objet.quantiter = document.getElementById("quantiter-objet").value;
            objet.valeur = document.getElementById("valeur-objet").value;
            objet.description = document.getElementById("description-objet").value;

            actionModifierObjet(objet);
        }

    };
})();
