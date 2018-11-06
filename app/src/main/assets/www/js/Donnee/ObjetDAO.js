var ObjetDAO = (function()
{
  var listeObjet = [];
  listeObjet.push(new Objet(0, "Hache Durandil", 1, 20, "Parce que les épées c'est surfait"));
  listeObjet.push(new Objet(1, "Tete d'ours empaillee", 1, 10, "ça pèse au moins 10 kilo mais ça vaut au moins 10 pièces d'or"));

  return function()
  {
    this.lister = function()
    {
        return listeObjet;
    }

    this.ajouter = function(objet)
    {
        listeObjet.push(objet);
    }

    this.modifier = function(objet)
    {
        listeObjet[objet.id] = objet;
    }
  }
})()
