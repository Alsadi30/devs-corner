import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';
import { SkillType } from "./skilltype";





@Entity()
export class Skill {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
    })
    name: string

    @Column("text")
    image: string

    @ManyToOne(() => User, (user) => user.skill)
    user: User

    @ManyToOne(() => SkillType, (skilltype) => skilltype.skills)
    skilltype: SkillType
    
    
}