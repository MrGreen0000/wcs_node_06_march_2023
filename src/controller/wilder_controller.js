const { dataSource } = require("../utils");
const Wilder = require("../entities/wilder_entity");
const Skill = require("../entities/skill_entity");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource.getRepository(Wilder).save(req.body);
            res.send("Created wilder");
        } catch (error) {
            res.status(404).send("Error while creating wilder");
        }
    },
    read: async (req, res) => {
        try {
            const wilders = await dataSource.getRepository(Wilder).find();
            res.send(wilders);
        } catch (error) {
            res.status(404).send("Error while reading wilder");
        }
    },

    update: async (req, res) => {
        const { id } = req.params;

        const existingUser = await dataSource
            .getRepository(Wilder)
            .findOneBy({ id });
        if (existingUser === null) {
            return res.status(404).send("Wilder not found");
        }
        await dataSource.getRepository(Wilder).update(id, req.body);
        res.send("Updated wilder");
    },

    delete: async (req, res) => {
        const { id } = req.params;
        const existingUser = await dataSource
            .getRepository(Wilder)
            .findOneBy({ id });
        if (existingUser === null) {
            return res.status(404).send("Wilder not found");
        }
        await dataSource.getRepository(Wilder).delete(id);
        res.send("Deleted Wilder");
    },

    addSkill: async (req, res) => {
        const wilderToUpdate = await dataSource.getRepository(Wilder).findOneBy({
            id: req.params.wilderId,
        });
        if (!wilderToUpdate) {
            return res.status(404).send("Wilder not found");
        }

        const skillToAdd = await dataSource.getRepository(Skill).findOneBy({
            id: req.params.skillId,
        });
        console.log("skillToAdd", skillToAdd);
        if (!skillToAdd) {
            return res.status(404).send("Skill not found");
        }

        wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];

        await dataSource.getRepository(Wilder).save(wilderToUpdate);

        res.send("Skill added");
    },
};
