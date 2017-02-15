var service = require('./service').getInstance();

var controller = {

    getAll: (req, res, next) => {
        service.getAll((error, result) => {
            if (error) {
                return res.status(500).json(error);
            } else {
                return res.status(200).json(result);
            }
        })
    },

    getById: (req, res, next) => {
        service.getById(req.params.id, (error, result) => {
            if (error) {
                return res.status(500).json(error);
            } else {
                return res.status(200).json(result);
            }
        })
    },

    add: (req, res, next) => {
        service.add(req.body, (error, result) => {
            if (error) {
                return res.status(500).json(error);
            } else {
                return res.status(200).json(result);
            }
        })
    }
}

module.exports = controller;