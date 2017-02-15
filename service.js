var User = require('./model');

module.exports = (function () {

    var instance = null;
    var users = [];

    return {
        getInstance: getInstance
    }

    function init() {

        var user = new User("Jon Doe", 20, "jondoe", "123abc");
        user.id = users.length + 1;
        users.push(user);

        return {
            add: add,
            getAll: getAll,
            getById: getById
        }

        function add(params, callback) {
            setTimeout(() => {

                var newUser = new User(params.name, params.age, params.login, params.password);
                newUser.id = users.length + 1;

                users.push(newUser);
                callback(newUser)

            }, 1000)
        }

        function getAll(callback) {
            setTimeout(() => {
                callback(users)

            }, 1000)
        }

        function getById(id, callback) {
            setTimeout(() => {

                if (id > users.length) {
                    return callback(new Error("NOT FOUND"));
                } else {
                    var foundedUser = users[id - 1];
                    callback(foundedUser);
                }
            }, 1000)
        }

    }

    function getInstance() {
        if (!instance) {
            instance = init();
        }

        return instance;
    }
}())