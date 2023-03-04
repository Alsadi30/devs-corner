import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user';




@Entity()
export class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable: false
    })
    position: string

    @Column({
        type: "text",
        nullable: false
    })
    companyName: string

    @Column({
        type: "date",
        nullable: false
    })
    startAt: Date

    @Column({
        type: "date",
        nullable: true
    })
    endAt: Date

    @ManyToOne(() => User, (user) => user.experience)
    user: User

}