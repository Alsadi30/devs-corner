"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const { User } = require("../models/user");
const { Profile } = require("../models/profile");
const { Experience } = require("../models/experience");
const { Projects } = require("../models/projects");
const { Credentials } = require("../models/credentials");
const { Socialmedia } = require("../models/socialmedia");
const { Education } = require("../models/education");
const { SkillType } = require("../models/skilltype");
const { DataSource } = require("typeorm");
const { Skill } = require("../models/skill");
const { HOST, USER, PORT, PASSWORD, DATABASE } = process.env;
const MyDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    entities: [User, Profile, Skill, SkillType, Experience, Projects, Credentials, Socialmedia, Education],
    synchronize: true,
    logging: true,
});
module.exports = MyDataSource;
//# sourceMappingURL=database.js.map