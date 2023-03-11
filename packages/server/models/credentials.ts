import { User } from "./user";

const { Column, Entity, ManyToOne, PrimaryGeneratedColumn } = require('typeorm')
// const { User } = require('./user');





@Entity()
export class Credentials {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable: false
    })
    title: string

    @Column("text")
    image: string

    @Column({
        type: "text",
        nullable: false
    })
    institution: string

    @Column({
        type: "text",
        nullable: true
    })
    cartificateUrl: string

    @Column({
        type: "text",
        nullable: true
    })
    cartificateId: string

    @Column({
        type: "text",
        nullable: false
    })
    courseDuration: string

    @Column({
        type: "date",
        nullable: false
    })
    achivedAt: Date

    @ManyToOne(() => User, (user) => user.credentials)
    user: User

}