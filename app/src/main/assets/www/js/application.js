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
            var vueInventaire = new VueInventaire(this.inventaireDonnees);
            vueInventaire.afficher();
        }
        else if(hash.match(/^#ajouter-objet/))
        {
            var vueAjouterObjet = new VueAjouterObjet(actionEnregistrerObjet);
            vueAjouterObjet.afficher();
        }

        else if(hash.match(/^#modifier-objet\/([0-9]+)/))
        {
            this.inventaireDonnees = this.objetDAO.lister();
            var navigation = hash.match(/^#modifier-objet\/([0-9]+)/)
            var idObjet = navigation[1];
            var vueModifierObjet = new VueModifierObjet(instance.inventaireDonnees[idObjet], actionModifierObjet);
            vueModifierObjet.afficher();
        }

        else
        {
            this.inventaireDonnees = this.objetDAO.lister();
            var navigation = hash.match(/^#objet\/([0-9]+)/);
            var idObjet = navigation[1];
            var vueObjet = new VueObjet(instance.inventaireDonnees[idObjet]);
            vueObjet.afficher();
        }

    }

    var actionEnregistrerObjet = function(objet)
   {
       this.objetDAO.ajouter(objet);
       naviguerAccueil();
   }

   var actionModifierObjet = function(objet)
  {
      this.objetDAO.modifier(objet);
      naviguerAccueil();
  }

    var naviguerAccueil = function()
    {
        window.location.hash = "";
    }

    initialiser();

})();
