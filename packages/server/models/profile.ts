import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';



@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
    })
    displayname: string

    @Column({
        type: "text",
    })
    bio: string

    @Column({
        type: "text",
    })
    about: string

    @Column("text")
    profilePic: string

    @Column("text")
    coverPic: string

    @Column("date")
    dateofBirth: Date

    @Column("text")
    nationality: string

    @Column("text")
    location: string

    @Column("text")
    gender: string

    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User

}