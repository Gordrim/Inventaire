var VueAjouterObjet = (function(){
    var pageAjouterObjet = document.getElementById("page-ajouter-objet").innerHTML;

    return function(actionEnregistrerObjet)
    {

        this.afficher = function()
        {
            document.getElementsByTagName("body")[0].innerHTML = pageAjouterObjet;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrerObjet);

        }

        var enregistrerObjet = function(evenement)
        {
            evenement.preventDefault();

            var nom = document.getElementById("nom").value;
            var quantiter = document.getElementById("quantiter").value;
            var valeur = document.getElementById("valeur").value;
            var description = document.getElementById("description").value;

            var objet = new Objet(nom, quantiter, valeur, description);

            actionEnregistrerObjet(objet);
        }

    };
})();
