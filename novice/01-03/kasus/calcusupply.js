var age = prompt("masukan umur anda : ");
var numPerDay = prompt("jumlah per hari");


function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'Anda membutuhkan ' + totalNeeded + ' cangkir teh untuk bertahan hingga usia ' + maxAge;
    document.write(message);
}

calculateSupply(age, numPerDay);