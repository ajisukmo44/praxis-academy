// var warna = "hijau";
// var warna = 'hijau';
// console.log(warna);


// const foo = new String('foo');
// console.log(foo);
// typeof foo;

// const a = '2';
// const b = '3';
// console.log(a + b);

//Embedded expressions

// const five = 5;
// const ten = 10;
// console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);

const msPerDay = 24 * 60 * 60 * 1000;

// July 17, 2014 00:00:00 UTC.
const september052019 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
};
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;

console.log(americanDateTime(september052019));