var User = require('./model');

module.exports = (function () {

    var instance = null;
    var users = [];

    return {
        getInstance: getInstance
    }

    function init() {

        return {
            add: add,
            getAll: getAll,
            getById: getById,
            removeUsers: removeUsers
        }

        function add(params, callback) {
            setTimeout(() => {

                if (params) {

                    var newUser = new User(params.name, params.age, params.login, params.password);
                    newUser.id = users.length + 1;

                    users.push(newUser);
                    callback(null, newUser);
                } else {
                    callback(new Error('invalid input'), null);
                }

            }, 1000)
        }

        function getAll(flag, callback) {
            setTimeout(() => {
                if (flag === 1) {
                    callback(null, users)
                } else {
                    callback(new Error('invalid input'), null);
                }

            }, 1000)
        }

        function getById(id, callback) {
            setTimeout(() => {

                if (id > users.length) {
                    return callback(new Error("NOT FOUND"), null);
                } else {
                    var foundedUser = users[id - 1];
                    callback(null, foundedUser);
                }
            }, 1000)
        }

        function removeUsers() {
            users = [];
        }

    }

    function getInstance() {
        if (!instance) {
            instance = init();
        }

        return instance;
    }
}())