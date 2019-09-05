function ValidateEmail(inputText) {
    var username = document.getElementById("username").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {

        alert("Halo, usernama anda adalah " + username + " , domain anda adalah ");
        document.form1.text1.focus();
        return true;
    } else {
        alert("Format email yang anda masukan salah ");
        document.form1.text1.focus();
        return false;
    }
}