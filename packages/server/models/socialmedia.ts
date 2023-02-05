import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';





@Entity()
export class Socialmedia {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable:false
    })
    url: string

    @Column({
        type: "text",
        nullable:false
    })
    thumbnail: string

    @ManyToOne(() => User, (user) => user.socialmedia)
    user: User
    
}