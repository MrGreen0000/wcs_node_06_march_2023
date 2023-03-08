const { dataSource } = require("../utils");
const Skill = require("../entities/skill_entity");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource.getRepository(Skill).save(req.body);
        } catch (error) {
            if (error.code === "SQLITE_CONSTRAINT") {
                res.status(409).send("The skill existing");
            }
            return res.status(400).send("Something went wrong");
        }
        res.send("Created skill");
    },
    read: async (req, res) => {
        const skills = await dataSource.getRepository(Skill).find();
        res.send(skills);
    },

    update: async (req, res) => {
        const { id } = req.params;

        const existingSkill = await dataSource
            .getRepository(Skill)
            .findOneBy({ id });
        if (existingSkill === null) {
            return res.status(404).send("Skill not found");
        }

        await dataSource.getRepository(Skill).update(id, req.body);
        res.send("Updated skill");
    },

    delete: async (req, res) => {
        const { id } = req.params;
        const existingSkill = await dataSource.getRepository(Skill).findOneBy({ id });
        if (existingSkill === null) {
            return res.status(404).send("Skill not found");
        }

        await dataSource.getRepository(Skill).delete(id);

        res.send("Deleted skill");
    },
};
