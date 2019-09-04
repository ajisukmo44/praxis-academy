(function () {

    alert("menampilkan pesan otomatis");

})();


(function () {

    alert("menampilkan pesan ke 2");

}());


(function (x, y) {

    alert("menjumlahkan : " + x + " dan " + y);

})(10, 50);


var sum = (function (x, y) {

    return x + y;

})(10, 50);

alert("hasil : " + sum);