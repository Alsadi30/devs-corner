import { Skill } from './skill';
const { Column, Entity, OneToMany, PrimaryGeneratedColumn } = require("typeorm");





@Entity()
export class SkillType {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
    })
    name: string

    @OneToMany(() => Skill, (skills) => skills.skilltype)
    skills: Skill[]


}