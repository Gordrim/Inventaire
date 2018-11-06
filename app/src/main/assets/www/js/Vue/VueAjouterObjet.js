var VueAjouterObjet = (function(){
    var pageAjouterObjet = document.getElementById("page-formulaire-objet").innerHTML;

    return function(actionEnregistrerObjet)
    {

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterObjet;

            document.getElementById("titre-page").value = "Ajouter un objet";

            var formulaireAjouter = document.getElementById("formulaire-objet");
            formulaireAjouter.addEventListener("submit", enregistrerObjet);

        }

        var enregistrerObjet = function(evenement)
        {
            evenement.preventDefault();

            var nom = document.getElementById("nom-objet").value;
            var quantiter = document.getElementById("quantiter-objet").value;
            var valeur = document.getElementById("valeur-objet").value;
            var description = document.getElementById("description-objet").value;

            var objet = new Objet(null, nom, quantiter, valeur, description);

            actionEnregistrerObjet(objet);
        }

    };
})();
