let myHeading = document.querySelector('h2');

var angka = prompt("masukan angka");

if (angka % 2 == 0) {
    alert(angka + ' adalah bilangan genap');
    myHeading.textContent = 'angka ' + angka + ' adalah bilangan genap';
} else

{
    alert(angka + ' adalah bilangan ganjil');
    myHeading.textContent = 'angka ' + angka + ' adalah bilangan ganjil ';
}