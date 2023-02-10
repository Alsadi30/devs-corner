import "reflect-metadata"
import { User } from "../models/user"
import { Profile } from "../models/profile"
import { Skill } from "../models/skill"
import { Experience } from "../models/experience"
import { Projects } from "../models/projects"
import { Credentials } from "../models/credentials"
import { Socialmedia } from "../models/socialmedia"
import { Education } from "../models/education"
import { SkillType } from "../models/skilltype"
const {DataSource} = require("typeorm")

const {HOST,USER,PORT,PASSWORD} = process.env

const MyDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USER,
    password: PASSWORD,
    database: "devs-corner",
    entities: [User,Profile,Skill,SkillType, Experience,Projects,Credentials,Socialmedia,Education],
    synchronize: true,
    logging: true,
})

module.exports = MyDataSource