function negativanE(szamT) {
    var vanE = false;
    for (var i = 0; i < szamT.length; i++) {
        if (szamT[i] < 0) {
            vanE = true;
        }
    }
    return vanE;
}
var szamTomb = [-1, 2, 4];
console.log(negativanE(szamTomb));
function keruletTerulet(sugar) {
    var kerulet = 2 * sugar * 3.14;
    var terulet = sugar * sugar * 3.14;
    var tuple = [kerulet, terulet];
    return tuple;
}
var eredmeny1 = console.log(keruletTerulet(4));
