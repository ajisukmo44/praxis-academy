// Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 4000, 'Goodbye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
//     res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//     console.log(values)
// );





//  Promise Chaining

// const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
// const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
// const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

// getPost() // #1.fetch post
//     .then(postResponse => postResponse.json()) // #2. get & return post json 
//     .then(postResponse => getAuthor(postResponse.id) // #3. fetch author
//         .then(authorResponse => authorResponse.json() // #4 get & return author json
//             .then(authorResponse => getComment(postResponse.id) // #5 fetch comment
//                 .then(commentResponse => commentResponse.json()) // #6 get & return comment json
//                 .then(commentResponse => { // #7 time to combine all results
//                     return ({
//                         postResponse,
//                         authorResponse,
//                         commentResponse
//                     }) // #8 combine & return all reponses
//                 })
//             )
//         )
//         .then(results => { // #9 read all responses
//             console.log(results.postResponse)
//             console.log(results.authorResponse)
//             console.log(results.commentResponse)

//         })
//     )
//     .catch(error => console.log(error)) //# 10 error handling





// Promise.all

// const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
// const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)
// const getComment = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

// var a = getPost().then(res => res.json()) // #1 get post
// var b = a.then(res => getAuthor(res.id)).then(res => res.json()) // #2 get author
// var c = a.then(res => getComment(res.id)).then(res => res.json()) //#3 get comment
// Promise.all([a, b, c]).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// })





// Promise in Looping

// const doFetch = (url) => fetch(url).then(result => result.json())
// let urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/2',
//     'https://jsonplaceholder.typicode.com/posts/3',
//     'https://jsonplaceholder.typicode.com/posts/4',
// ]

// let promises = []

// urls.map((url) => {
//     promises.push(doFetch(url))
// })

// Promise.all(promises)
//     .then(results => console.log(results))



// Promise.race


Promise.seriousRace = function (promises) {
    let indexPromises = promises.map((p, index) => p.catch(() => {
        throw index
    }))
    return Promise.race(indexPromises).catch(index => {
        let p = promises.splice(index, 1)[0]
        p.catch(e => console.log(e + ' terjatuh,ahh sudahlah lanjutkan saja'))
        return Promise.seriousRace(promises)
    })
}

let peserta1 = new Promise(resolve => setTimeout(resolve, 30, 'Peserta 1'))
let peserta2 = new Promise((resolve, reject) => setTimeout(reject, 20, 'Peserta 2'))
let peserta3 = new Promise(resolve => setTimeout(resolve, 50, 'Peserta 3'))
let peserta4 = new Promise(resolve => setTimeout(resolve, 100, 'Peserta 4'))
let peserta5 = new Promise(resolve => setTimeout(resolve, 90, 'Peserta 5'))

Promise.seriousRace([peserta1, peserta2, peserta3, peserta4, peserta5])
    .then(val => console.log('Balapan selesai,Pemenangnya adalah:', val))
    .catch(err => console.log('Balapan dihentikan karena : ', err))