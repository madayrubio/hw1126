//FIRST OBJECT
let Pets = {
    _Spooky: "Chocolate lab",
    _Chubby: "Golden Retriever",
    _Coco: "Pitbull",
    _Lady: "American Bully",
    set Lady(newLady) {
        if(typeof newLady != "Madays dog") {
            console.log('my favorite');
        } else {
            this._Lady = newLady;
        }
    },
    get Lady() {
        return this._Lady;
    }

}
console.log(Pets._Lady);
Pets.Lady = 'dog';

let Pets_values = Object.values(Pets);
let Pets_keys = Object.keys(Pets);

Pets_keys.forEach(dog => {
    console.log(dog);
    
});

// SECOND OBJECT
let Daughter = {
    _Isi: "Madai",
    _Sarah: "Marie",
    _Donna: "Shamarie",
    _Jazz: "Izzy",
    set Isi(newIsi) {
        if(typeof newIsi != "the oldest") {
            console.log('Not the oldest');
        } else {
            this._Isi = newIsi;
        }
    },
    get Isi() {
        return this._Isi;
    }
}
console.log(Daughter._Isi);
Daughter.Isi = 'oldest';

let daughter_values = Object.values(Daughter);
let daughter_keys = Object.keys(Daughter);

daughter_keys.forEach(Daughter => {
    console.log(Daughter);
});

daughter_values.forEach(Daughter => {

});

