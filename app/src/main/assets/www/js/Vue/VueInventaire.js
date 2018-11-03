var VueInventaire = function(inventaireDonnees)
{

  this.afficher = function()
  {
    var pageIventaire = document.getElementById("page-inventaire").innerHTML;

    document.getElementsByTagName("body")[0].innerHTML = pageIventaire;

    var inventaire = document.getElementById("inventaire");
    var inventaireDonnees = new ObjetDAO().lister();

    var li = "";

    for(var numeroObjet in inventaireDonnees)
    {
      li+= "<li><a href=\"#objet/"+numeroObjet+"\">"+inventaireDonnees[numeroObjet].nom+"</a></li>";
    }

    inventaire.innerHTML = li;
  }
}
