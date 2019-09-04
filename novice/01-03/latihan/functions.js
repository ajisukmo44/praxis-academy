var a = prompt("masukan nilai a : ");
var b = prompt("masukan nilai b :");

function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;

}

alert(' jumlah volume dua kubus adalah: ' + jumlahVolumeDuaKubus(a, b));