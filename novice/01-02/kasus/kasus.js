//nomer 1
var angka1, angka2;
angka1 = window.prompt("masukan angka ke 1");
angka2 = window.prompt("masukan angka ke 2");

if (parseInt(angka1) > parseInt(angka2)) {
    alert("antara angka " + angka1 + " dan " + angka2 + " yg besar adalah angka : " + angka1 + ".");
} else
if (parseInt(angka2) > parseInt(angka1)) {
    alert("antara angka " + angka1 + " dan " + angka2 + " yg besar adalah angka : " + angka2 + ".");
} else {
    alert("antara angka " + angka1 + " dan " + angka2 + " adalah sama.");
}

// nomer2

// var x = prompt('masukan angka ke 1 ');
// var y = prompt('masukan angka ke 2 ');
// var z = prompt('masukan angka ke 3 ');
// if (x > 0 && y > 0 && z > 0) {
//     alert("The sign is +");
// } else if (x < 0 && y < 0 && z < 0) {
//     alert("The sign is +");
// } else if (x > 0 && y < 0 && z < 0) {
//     alert("The sign is +");
// } else if (x < 0 && y > 0 && z < 0) {
//     alert("The sign is +");
// } else {
//     alert("The sign is -");
// }


//nomer3
// var x = prompt('masukan angka ke 1 ');
// var y = prompt('masukan angka ke 2 ');
// var z = prompt('masukan angka ke 3 ');

// if (x > y && x > z) {
//     if (y > z) {
//         alert(x + ", " + y + ", " + z);
//     } else {
//         alert(x + ", " + z + ", " + y);
//     }
// } else if (y > x && y > z) {
//     if (x > z) {
//         alert(y + ", " + x + ", " + z);
//     } else {
//         alert(y + ", " + z + ", " + x);
//     }
// } else if (z > x && z > y) {
//     if (x > y) {
//         alert(z + ", " + x + ", " + y);
//     } else {
//         alert(z + ", " + y + ", " + x);
//     }
// }

//nomer 4

// var a = prompt('masukan angka ke 1 ');
// var b = prompt('masukan angka ke 2 ');
// var c = prompt('masukan angka ke 3 ');
// var d = prompt('masukan angka ke 4 ');
// var f = prompt('masukan angka ke 5 ');

// if (a > b && a > c && a > d && a > f) {
//     alert('angka terbesar adalah: ' + a);
// } else if (b > a && b > c && b > d && b > f) {
//     alert('angka terbesar adalah: ' + b);
// } else if (c > a && c > b && c > d && c > f) {
//     alert('angka terbesar adalah: ' + c);
// } else if (d > a && d > c && d > b && d > f) {
//     alert('angka terbesar adalah: ' + d);
// } else {
//     alert('angka terbesar adalah: ' + f);
// }


//nomer 5 
// for (var x = 0; x <= 15; x++) {
//     if (x === 0) {
//         console.log(x + " is even");
//     } else if (x % 2 === 0) {
//         console.log(x + " is even");
//     } else {
//         console.log(x + " is odd");
//     }
// }

//nomer 6

// var students = [
//     ['David', 80],
//     ['Vinoth', 77],
//     ['Divya', 88],
//     ['Ishitha', 95],
//     ['Thomas', 68]
// ];

// var Avgmarks = 0;

// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }

// console.log("Average grade: " + (Avgmarks) / students.length);

// if (avg < 60) {
//     console.log("Grade : F");
// } else if (avg < 70) {
//     console.log("Grade : D");
// } else if (avg < 80) {
//     console.log("Grade : C");
// } else if (avg < 90) {
//     console.log("Grade : B");
// } else if (avg < 100) {
//     console.log("Grade : A");
// }


//nomer 7

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     } else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     } else {
//         console.log(i);
//     }
// }

//nomer 8

// function happy_number(num) {
//     var m, n;
//     var c = [];

//     while (num != 1 && c[num] !== true) {
//         c[num] = true;
//         m = 0;
//         while (num > 0) {
//             n = num % 10;
//             m += n * n;
//             num = (num - n) / 10;
//         }
//         num = m;
//     }
//     return (num == 1);
// }

// var cnt = 5;
// var num = 1;
// var f5 = '';
// while (cnt-- > 0) {
//     while (!happy_number(num))
//         num++;
//     f5 = f5 + (num + ", ");

//     num++;
// }
// console.log('First 5 happy numbers are : ' + f5);

//nomer 9

// function three_digit_armstrong_number() 
// {
//  for (var i = 1; i < 10; ++i) 
//  {
//    for (var j = 0; j < 10; ++j) 
//      {
//         for (var k = 0; k < 10; ++k)
//         {
//           var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
//           var plus = (i * 100 + j * 10 +  k);
//           if (pow == plus) 
//            {     
//              console.log(pow);
//             }
//          }
//        }
//     }
//   }
// three_digit_armstrong_number();

//nomer 10

// var x, y, chr;
// for (x = 1; x <= 6; x++) {
//     for (y = 1; y < x; y++) {
//         chr = chr + ("*");
//     }
//     console.log(chr);
//     chr = '';
// }

//nomer 11
// var a = 2154; //First number
// var b = 458;  //Second number 
// var gcd;
// while (a!=b)
// {
// 	if (a>b)
// 	{
// 		a = a -b;
// 	}
// 	else
// 	{
// 		b = b - a;
// 	}
// }
// gcd = a;
// console.log(gcd);

//nomer 12

// var sum = 0;
// for (var x = 0; x < 1000; x++) {
//     if (x % 3 === 0 || x % 5 === 0) {
//         sum += x;
//     }
// }
// console.log(sum);