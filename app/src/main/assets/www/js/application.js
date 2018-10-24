var pageIventaire = document.getElementById("page-inventaire").innerHTML;

document.getElementsByTagName("body")[0].innerHTML = pageIventaire;

var inventaire = document.getElementById("inventaire");
var inventaireDonnees = ["bla", "bla", "bla", "bla", "bla"];

var li = "";

for(var numeroObjet in inventaireDonnees)
{
  li+= "<li>"+inventaireDonnees[numeroObjet]+"</li>";
}

inventaire.innerHTML = li;
