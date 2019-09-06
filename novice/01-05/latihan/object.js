// //cara 1

// function halo() {

//     console.log(this);
//     console.log('halo');

// }
// halo();

//cara ke 2

// function halo() {

//     console.log(this);
//     console.log('halo');


// }

// var obj1 = new halo();
// var obj2 = new halo();







//cara ke 3

var obj = {
    a: 10,
    nama: 'aji sukmo'
};
obj.halo = function () {
    console.log(this);
    console.log('halo');
}

obj.halo();

//cara k3 3 