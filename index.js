var unirest = require('unirest');
//La réponse
var req =unirest("GET","http://localhost:3000/annonces_ventes?_limit=10")
//La réponse

var req1 =unirest("GET","http://localhost:3000/annonces_ventes/")

req.header( {
  "Cache-Control": "no-cache",

})
/*
1. Modifier le code du Listing 2 pour afficher seulement les 10 premiers enregistrements.

//  La réponse (1) :

*/
req.end((response) => {

    console.log(" Les 10 premiers:",response.body);

  })
/*2- Écrire une fonction qui permet de filtrer seulement les ressources de votre API dont le
 nom commence par la lettre M.
// La réponse (2) :

*/


  req1.end((response1) => {

    console.log("Les nom commence par la lettre M:",response1.body.filter((m) => m.titre.startsWith("M")));

  })

 /*
 3. Que signifier la ligne Numéro 6 du Listing 2.

// La réponse (3) :

Cache-Control: no-cache:

no-cache utilise l' en-tête pour dire aux caches que cette ressource ne peut pas être réutilisée sans vérifier d'abord si la ressource a changé sur le serveur d'origine 

Cela signifie qu'il no-cache reviendra au serveur pour s'assurer que la réponse n'a pas changé et qu'il n'est donc pas nécessaire de télécharger la ressource si tel est le cas.




*/