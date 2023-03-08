const typeorm = require("typeorm");

module.exports = {
    dataSource: new typeorm.DataSource({
        type: "sqlite",
        database: "./wildersdb.sqlite",
        synchronize: true,
        entities: [require("./entities/wilder_entity"), require("./entities/skill_entity")],
        logging: ["query", "error"],
    }),
};