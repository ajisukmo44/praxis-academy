let myHeading = document.querySelector('h2');
var buah = prompt("masukan buah yang anda cari :")

switch (buah) {
    case 'mangga':
        alert('Harganya : 35.000/kg');
        myHeading.textContent = 'buah ' + buah + ' Harganya : 25.000/kg';
        break;
    case 'apel':
        alert('Harganya : 25.000/kg');
        myHeading.textContent = 'buah ' + buah + ' Harganya : 25.000/kg';
        break;
    case 'pisang':
        alert('Harganya : 25.000/kg');
        myHeading.textContent = 'buah ' + buah + ' Harganya : 25.000/kg';
        break;
    case 'anggur':
        alert('Harganya : 45.000/kg');
        myHeading.textContent = 'buah ' + buah + ' Harganya : 25.000/kg';
        break;
    case 'Harganya : jeruk':
        alert('15.000/kg');
        myHeading.textContent = 'buah ' + buah + ' Harganya : 25.000/kg';
        break;
    default:
        alert('Maaf buah  ' + buah + '  tidak ada');
        myHeading.textContent = 'buah ' + buah + ' Tidak ada';
}