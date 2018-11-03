var VueObjet = (function()
{
    var pageObjet = document.getElementById("page-objet").innerHTML;

    return function(objet)
    {
      this.afficher = function()
      {
        document.getElementsByTagName("body")[0].innerHTML = pageObjet;

        document.getElementById("nom-objet").innerHTML = objet.nom;
        document.getElementById("quantiter-objet").innerHTML = objet.quantiter;
        document.getElementById("valeur-objet").innerHTML = objet.valeur;
        document.getElementById("description-objet").innerHTML = objet.description;
      }
    };
})();
