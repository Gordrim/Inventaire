var ObjetDAO = (function()
{
  var listeObjet = [];
  listeObjet.push(new Objet(0, "Hache Durandil", 1, 20, "Parce que les épées c'est surfait"));
  listeObjet.push(new Objet(1, "Tete d'ours empaillee", 1, 10, "ça pèse au moins 10 kilo mais ça vaut au moins 10 pièces d'or"));

  return function()
  {
    this.lister = function()
    {
        console.log("lister->listeObjet : " + listeObjet);
        console.log("lister->localStorage['objet'] : " + localStorage['objets']);
        if(localStorage['objets'])
        {
          listeDonneesObjet = JSON.parse(localStorage['objets']);
          listeObjet = [];
          listeDonneesObjet.forEach(function(donneesObjet, index)
          {

              var objet = new Objet(donneesObjet.id, donneesObjet.nom, donneesObjet.quantiter, donneesObjet.valeur, donneesObjet.description);

              listeObjet[objet.id] = objet;
          })
        }
        return listeObjet;
    }

    this.getObjet = function(id)
    {
        if(id in a)
        {
          return listeObjet[id];
        }
        return null;
    }

    this.ajouter = function(objet)
    {
        if(listeObjet.length > 0)
            objet.id = listeObjet[listeObjet.length-1].id + 1;
        else
            objet.id = 0;

        listeObjet[objet.id] = objet;
        localStorage['objets'] = JSON.stringify(listeObjet);
        console.log("JSON.stringify(listeObjet) : " + JSON.stringify(listeObjet));
    }

    this.modifier = function(objet)
    {
        listeObjet[objet.id] = objet;
        localStorage['objets'] = JSON.stringify(listeObjet);
        console.log("JSON.stringify(listeObjet) : " + JSON.stringify(listeObjet));
    }
  }
})()
