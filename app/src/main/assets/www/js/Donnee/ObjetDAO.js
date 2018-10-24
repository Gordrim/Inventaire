var ObjetDAO = function()
{
  this.lister = function()
  {
      listeObjet = new Array();
      listeObjet.push(new Objet("Hache Durandil", 1, 20, "Parce que les épées c'est surfait"));
      listeObjet.push(new Objet("Tete d'ours empaillee", 1, 10, "ça pèse au moins 10 kilo mais ça vaut au moins 10 pièces d'or"));
      return listeObjet;
  }
}
