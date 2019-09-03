var jumlahBus = 7;
var busBeroperasi = 5;
var noBus = 1;


while (noBus <= busBeroperasi) {
    console.log('Bus no. ' + noBus + ' beroperasi dengan baik');

    noBus++;

}

for (noBus = busBeroperasi + 1; noBus <= jumlahBus; noBus++) {

    console.log('Bus No. ' + noBus + ' sedang tidak beroperasi.');

}