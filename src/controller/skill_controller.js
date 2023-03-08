const dataSource = require("../utils").dataSource;
const Skill = require("../entities/skill_entity");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource
                .getRepository(Skill)
                .save(req.body)
            res.send("Created wilder");
        } catch (error) {
            if (error.code === "SQLITE_CONSTRAINT") {
                res.status(409).send("The skill existing");
            }

        }
    },
    read: async (req, res) => {
        try {
            const wilders = await dataSource
                .getRepository(Skill)
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
                .getRepository(Skill)
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
                .getRepository(Skill)
                .delete(req.params.id)

            res.send(data);
        }
        catch (error) {
            res.status(404).send("Une erreur est survenue");
        }
    },

};
