const { Column, Entity, ManyToOne, PrimaryGeneratedColumn } = require("typeorm");
import { User } from './user';





@Entity()
export class Socialmedia {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable: false
    })
    url: string

    @Column({
        type: "text",
        nullable: false
    })
    type: string

    @ManyToOne(() => User, (user) => user.socialmedia)
    user: User

}