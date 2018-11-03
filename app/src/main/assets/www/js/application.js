(function()
{
    var instance = this;

    var initialiser = function()
    {
        this.objetDAO = new ObjetDAO();

        window.addEventListener("hashchange",naviguer);

        naviguer();
    }

    var naviguer = function()
    {
        var hash = window.location.hash;

        if(!hash)
        {
            this.inventaireDonnees = this.objetDAO.lister();
            var vueInventaire = new VueInventaire(instance.inventaireDonnees);
            vueInventaire.afficher();
        }
        else
        {
            var navigation = hash.match(/^#objet\/([0-9]+)/);
            alert(navigation);
            var idObjet = navigation[1];
            alert(idObjet);
            var vueObjet = new VueObjet(instance.inventaireDonnees[idObjet]);
            vueObjet.afficher();
        }

    }

    var naviguerAccueil = function()
    {
        window.location.hash = "";
    }

    initialiser();

})();
