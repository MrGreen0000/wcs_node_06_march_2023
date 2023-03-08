const { Index, Unique, Entity } = require("typeorm");

const EntitySchema = require("typeorm").EntitySchema;


module.exports = new EntitySchema({
    name: "Wilder",
    columns: {
        id: {
            primary: true,
            generated: true,
            type: "int"
        },
        name: {
            type: "text",
        },
    },
});