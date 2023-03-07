const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/wilder_entity");

module.exports = {
    create: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .save(req.body)
            .then(() => {
                res.send("Created wilder");
            })
            .catch(() => {
                res.send("Error while creating wilder");
            });
    },
    read: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .find()
            .then((wilders) => {
                res.send(wilders);
            })
            .catch((error) => {
                res.send("Une erreur est survenue.");
            });
    },

    update: (req, res) => {
        dataSource
            .getRepository(Wilder)
            .update(req.params.id, req.body)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.send("Une erreur est survenue.");
            });
    },

    delete: (req, res) => {
        // DELETE http://localhost:3000/api/wilder/:id

        dataSource
            .getRepository(Wilder)
            .delete(req.params.id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.send("Une erreur est survenue");
            });
    },
};
