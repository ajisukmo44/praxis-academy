// Async Error Handling

// async function fetchWithAsyncAwait(id) {
//     try {
//         let response = await fetch(endpoint + id)
//         response = await response.json()
//         console.log(response)
//     } catch (error) {
//         console.log('opps' + error)
//     }
// }


// Async / Await / Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();