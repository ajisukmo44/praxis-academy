function user(id, nama) {
    this.id = id;
    this.nama = nama;
    this.online = false;
}
user.prototype.login = function () {
    this.online = true;
    console.log(this.nama, ' log in');
}

user.prototype.logout = function () {
    this.online = false;
    console.log(this.nama, ' log out');
}


var user1 = new user('01', 'Aji Sukmo');
var user2 = new user('02', 'Beckham');


console.log(user1);
user2.login();