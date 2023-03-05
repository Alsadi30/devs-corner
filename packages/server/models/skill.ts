import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
    thumbnail: string

    @ManyToOne(() => SkillType, (skilltype) => skilltype.skills)
    skilltype: SkillType


}