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

class Admin extends user {

    deleteUser(user) {

        users = users.filter(u => {

            return u.nama != user.nama
        })

    }

}

var user1 = new user('01', 'Aji Sukmo');
var user2 = new user('02', 'Beckham');
var admin = new Admin('03', 'Bambang');

var users = [user1, user2, admin];


admin.deleteUser(user2);

console.log(users);