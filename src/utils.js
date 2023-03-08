const typeorm = require("typeorm");
const Wilder = require("./entities/wilder_entity");
const Skill = require("./entities/skill_entity");

module.exports = {
    dataSource: new typeorm.DataSource({
        type: "sqlite",
        database: "./wildersdb.sqlite",
        synchronize: true,
        entities: [Wilder, Skill],
        logging: ["query", "error"],
    }),
};