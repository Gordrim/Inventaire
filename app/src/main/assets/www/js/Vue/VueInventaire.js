var VueInventaire = (function()
{

  var pageIventaire = document.getElementById("page-inventaire").innerHTML;

  return function(inventaireDonnees)
  {
    this.afficher = function()
    {
      document.getElementsByTagName("body")[0].innerHTML = pageIventaire;

      var inventaire = document.getElementById("inventaire");

      var li = "";
      inventaireDonnees.forEach(function(objet, index)
        {
          li+= "<li class=\"row\"><a href=\"#objet/"+objet.id+"\" class=\"col text-light\">"+objet.nom+"</a>  <a href=\"#modifier-objet/"+objet.id+"\" class=\"btn btn-dark col\">Modifier</a></li>";
        })

      inventaire.innerHTML = li;
    };
  }
})();
