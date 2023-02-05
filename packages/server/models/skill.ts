import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';





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
    
}