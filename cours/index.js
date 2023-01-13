const obj = {
//index : pseudo, value: Fabien
    pseudo: "Fabien",
    ville: "SPLC",
    admin: false,

    //methode

    // direBonjour() {
    //     console.log("Bonjour, je suis " + this.pseudo);
    // }

    direBonjour: function() {
        console.log("Bonjour, je suis " + this.pseudo);
    }
}

//ajouter
obj.age = 24
obj["admin"] = true

//supprimer
delete obj.ville 

//modifier
obj.pseudo = "ARIA"

// console.log( obj);

//Checher si une propriété existe
// console.log('pseudo' in obj);
// console.log('ville' in obj);

//Parcourir un objet
//key = pseudo , obj[key] = valeur
for (const key in obj) {
    // console.log(key + " : " + obj[key] );
}

console.log(obj.direBonjour);

