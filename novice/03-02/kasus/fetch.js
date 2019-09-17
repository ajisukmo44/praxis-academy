const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {

    e.preventDefault();

    const formData = new FormData(this);
    const searchParams = new URLSearchParams();

    for (const pair of formData) {

        searchParams.append(pair[0], pair[1]);
    }

    fetch('login.php', {
        method: 'post',
        body: searchParams
    }).then(function (response) {
        return response.text();

    }).then(function (text) {
        console.log(text);

    }).catch(function (error) {
        console.log(eror);

    })


});