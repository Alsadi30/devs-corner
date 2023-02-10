import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';
import { Skill } from './skill';





@Entity()
export class SkillType {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
    })
    name: string

    @OneToMany(() => Skill, (skills) => skills.user)
    skills: Skill[]

    
}