var inventaireDonnees = new ObjetDAO().lister();
var vueInventaire = new VueInventaire(inventaireDonnees);
vueInventaire.afficher();
