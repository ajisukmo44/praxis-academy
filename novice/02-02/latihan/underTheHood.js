function user(id, nama) {
    this.id = id;
    this.nama = nama;
    this.online = false;
    this.login = function () {
        console.log(this.email, 'log in');
        return this;

    }
}


var user1 = new user(01, 'Aji Sukmo');
var user2 = new user(01, 'Beckham');

console.log(user1);
user2.login();