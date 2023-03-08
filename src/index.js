const express = require("express");
const dataSource = require("./utils").dataSource;
const WilderController = require("./controller/wilder_controller");
const SkillController = require("./controller/skill_controller");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/api/wilder", WilderController.create);

app.get("/api/wilder", WilderController.read);

app.put("/api/wilder/:id", WilderController.update);

app.delete("/api/wilder/:id", WilderController.delete);

app.post("/api/skill", SkillController.create);

app.get("/api/skill", SkillController.read);

app.put("/api/skill/:id", SkillController.update);

app.delete("/api/skill/:id", SkillController.delete);





const start = async () => {
    await dataSource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
};

start();
