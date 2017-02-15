function User (name, age, login, password) {
    this.name = name.toUpperCase();
    this.age = age;
    this.login = login;
    this.password = password;
}

module.exports = User;