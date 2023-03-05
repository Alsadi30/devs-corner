const { Column, Entity, OneToOne, PrimaryGeneratedColumn } = require("typeorm");
import { User } from './user';



@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable: true
    })
    displayname: string

    @Column({
        type: "text",
        nullable: true
    })
    bio: string

    @Column({
        type: "text",
        nullable: true
    })
    about: string

    @Column({
        type: "text",
        nullable: true
    })
    profilePic: string

    @Column({
        type: "text",
        nullable: true
    })
    coverPic: string

    @Column({
        type: "date",
        nullable: true
    })
    dateofBirth: Date

    @Column({
        type: "text",
        nullable: true
    })
    nationality: string

    @Column({
        type: "text",
        nullable: true
    })
    location: string

    @Column({
        type: "text",
        nullable: true
    })
    gender: string

    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User

}