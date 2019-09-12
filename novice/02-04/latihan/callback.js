// dasar callback


// function main(param1, param2, callBack) {
//     console.log(param1, param2)
//     callBack()
// }

// function myCallback() {
//     console.log('hello callback')
// }

// main(1, 2, myCallback)





// callback ajax 

function requestAjax(callback) {

    // inisialisasi library XML Http Request
    var xhr = new XMLHttpRequest();

    // set target request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1')

    // terapkan callback
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(xhr.responseText)
        } else {
            callback('Failed')
        }
    }

    // mulai request
    xhr.send()

}

function showResult(data) {
    if (data != 'Failed') {
        //tampilkan Data
        data = JSON.parse(data)
        console.log(data)
    }
}

requestAjax(showResult)



// contoh callback

// const posts = [{
//         title: 'Post One',
//         body: 'This is post one'
//     },
//     {
//         title: 'Post Two',
//         body: 'this is post two'
//     }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 3000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 1000);
// }


// createPost({
//     title: 'Post Three',
//     body: 'This is post three'
// }, getPosts); 



// callback hell

// var a = readFileContent("a.md");
// var b = readFileContent("b.md");
// var c = readFileContent("c.md");
// writeFileContent("result.md", a + b + c);
// console.log("we are done");


// readFileContent("a.md", function (a) {
//     readFileContent("b.md", function (b) {
//         readFileContent("b.md", function (b) {
//             writeFileContent("result.md", a + b + c, function () {
//                 console.log("we are done");
//             })
//         })
//     })
// })