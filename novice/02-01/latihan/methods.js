class user {
    constructor(id, nama) {
        this.id = id;
        this.nama = nama;
        this.score = 0;
    }
    login() {

        console.log(this.nama, 'id login');
        return this;

    }
    logout() {
        console.log(this.nama, 'id log out');
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.nama, 'score is now', this.score);
        return this;

    }

}

var user1 = new user('01', 'Aji Sukmo');
var user2 = new user('02', 'Beckham');

user1.login().updateScore().updateScore().updateScore().logout();