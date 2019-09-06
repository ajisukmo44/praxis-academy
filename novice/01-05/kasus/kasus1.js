document.writeln("<br>")
document.writeln("<h3> Matriks A </h3>")

var a = new Array(2);
a[0] = new Array(2);
a[1] = new Array(2);

a[0][0] = 4;
a[0][1] = 7;
a[1][0] = 2;
a[1][1] = 1;


document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(a[0][0])
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(a[0][1])
document.writeln("<br>")

document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(a[1][0])
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(a[1][1])


var b = new Array(2);
b[0] = new Array(2);
b[1] = new Array(2);

b[0][0] = 5;
b[0][1] = 3;
b[1][0] = 9;
b[1][1] = 6;

document.writeln(" <h3> Matriks B </h3>")

document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(b[0][0])
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(b[0][1])
document.writeln("<br>")

document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(b[1][0])
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(b[1][1])
document.writeln(" <h3> Hasil = </h3>")


var c = new Array(2);
c[0] = new Array(2);
c[1] = new Array(2);
for (var i = 0; i < 2; i++)
    for (var j = 0; j < 2; j++)
        c[i][j] = a[i][j] + b[i][j];

document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(c[0][0])
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(c[0][1])
document.writeln("<br>")

document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(c[1][0])
document.writeln("&nbsp;&nbsp;&nbsp;&nbsp;")
document.writeln(c[1][1])