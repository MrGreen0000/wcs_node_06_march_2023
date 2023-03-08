const dataSource = require("../utils").dataSource;
const Wilder = require("../entities/wilder_entity");


module.exports = {
    create: async (req, res) => {
        try {
            await dataSource
                .getRepository(Wilder)
                .save(req.body)
            res.send("Created wilder");
        } catch (error) {

            console.log(error)
            res.status(404).send("Error while creating wilder");

        }
    },
    read: async (req, res) => {
        try {
            const wilders = await dataSource
                .getRepository(Wilder)
                .find()
            res.send(wilders);

        } catch (error) {
            console.log(error)
            res.status(404).send("Une erreur est survenue.");
        }

    },

    update: async (req, res) => {
        try {
            await dataSource
                .getRepository(Wilder)
                .update(req.params.id, req.body)

            res.send("Updated wilder !");

        } catch (error) {
            res.status(404).send("Une erreur est survenue.");
        }
    },

    delete: async (req, res) => {
        // DELETE http://localhost:3000/api/wilder/:id
        try {
            await dataSource
                .getRepository(Wilder)
                .delete(req.params.id)

            res.send(data);
        }
        catch (error) {
            res.status(404).send("Une erreur est survenue");
        }
    },

    addSkill: async (req, res) => {
        try {
            await dataSource
                .getRepository(Skill)
                .save(req.body);
            res.send("Add a skill");
        } catch (error) {
            console.log(error);
            res.status(404).send("Une erreur est survenu");
        }
    }
};
