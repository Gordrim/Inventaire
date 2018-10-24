var inventaireDonnees = new ObjetDAO().lister();
var vueInventaire = new VueInventaire(inventaireDonnees);
//vueInventaire.afficher();

var vueObjet = new VueObjet(inventaireDonnees[0]);
vueObjet.afficher();
