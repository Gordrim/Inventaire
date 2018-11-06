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
          li+= "<li><a href=\"#objet/"+objet.id+"\">"+objet.nom+"</a>  <a href=\"#modifier-objet/"+objet.id+"\">Modifier</a></li>";
        })

      inventaire.innerHTML = li;
    };
  }
})();
