//Asynchronous

console.log('Hello');
setTimeout(() => {
    console.log('Javascript3')
}, 400);
setTimeout(() => {
    console.log('Javascript1')
}, 100);
setTimeout(() => {
    console.log('Javascript2')
}, 200);