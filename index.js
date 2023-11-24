function negativVanE(szamT) {
    var vanE = false;
    for (var i = 0; i < szamT.length; i++) {
        if (szamT[i] < 0) {
            vanE = true;
        }
    }
    return vanE;
}
var szamTomb = [-1, 2, 4];
console.log(negativVanE(szamTomb));
function keruletTerulet(sugar) {
    var kerulet = 2 * sugar * Math.PI;
    var terulet = sugar * sugar * Math.PI;
    var tuple = [kerulet, terulet];
    return tuple;
}
var asd;
var eredmeny1 = console.log(keruletTerulet(4));
var auto1 = {
    gyarto: "Opel", tipus: "204", hengurtart: 1200, benzinesE: true,
};
var auto2 = {
    gyarto: "Peudgeot", tipus: "D", hengurtart: 900, benzinesE: false,
};
var auto3 = {
    gyarto: "Mazda", tipus: "N", hengurtart: 1300, benzinesE: true,
};
var auto4 = {
    gyarto: "Ford", tipus: "M", hengurtart: 1600, benzinesE: true,
};
var autokTomb = [auto1, auto2, auto3, auto4];
function minimumKeres(tomb) {
    var henrUrtartMin = tomb[0];
    for (var i = 0; i < tomb.length; i++) {
        if (henrUrtartMin.hengurtart > tomb[i].hengurtart) {
            henrUrtartMin = tomb[i];
        }
    }
    return henrUrtartMin;
}
var eredmeny2 = console.log(minimumKeres(autokTomb));
function dbSzamlalo(tomb1) {
    var db = 0;
    for (var i = 0; i < tomb1.length; i++) {
        if (tomb1[i].benzinesE) {
            db++;
        }
    }
    return db;
}
var eredmeny3 = console.log(dbSzamlalo(autokTomb));
var asd;
