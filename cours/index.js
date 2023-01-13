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

// console.log(obj.direBonjour);

//Pour obtenir les clés d'un objet dans un tableau

const keys = Object.keys(obj);
// console.log(keys);

//Pour obtenir les valeurs d'un objet dans un tableau

const values = Object.values(obj);
// console.log(values);

// Mettre chaque index et sa valeur dans un tableau pour en faire un tableau de tableau
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
    taille: "1m80",
    poids: "75kg"
}

//Fusionner 2 objets
const fusion = Object.assign({}, obj , obj2);


//Empecher les modification 
// const newObj = Object.freeze(obj); //bloque complètement toute modification
const newObj = Object.seal(obj); //bloque l'ajout d'index mais permet la modification
newObj.pseudo = 'test';
newObj.adresse = '6 rue du bourg'
// console.log(newObj);// rien n'est fait

//---------------------------
//---Construire des objets---
//----------------------------

//Fonction constructeur
function User(pseudo, ville){
    this.pseudo = pseudo;
    this.ville = ville;
//this fait référence à l'objet qui a été instancié
    this.getCity = function() {
        console.log(this.pseudo + " habite à " + this.ville);
    }
} 

//new User est une instance du constructeur
const user1 = new User('fabien', 'Laval');
const user2 = new User('Charlène', 'La Gravelle');

// console.log(user2.getCity());

//------------------------------------------
// Factory functions
function User3(pseudo, ville){
    return {
        pseudo,
        ville
    }
} 

const user4 = User3('Daniel', "Paris");

console.log(user4);

//-----------------------------
//Class
//-----------------------------
//créer une nouvelle classe
class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }
    //Methodes
    sayMyName = function() {
        console.log("Bonjour je suis " + this.pseudo);
    }
}

const user5 = new Utilisateur('Samia', 'Lion');

Utilisateur.prototype.sayCity = function() {
    console.log("J'habite à " + this.ville);
}

// console.log(user5.sayCity());

Object.assign(Utilisateur.prototype, {
    method1() {
        //Ma méthode
    },
    method2() {
        //Ma méthode
    }
})

console.log(user5);



