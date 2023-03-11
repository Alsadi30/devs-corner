const { Column, Entity, ManyToOne, PrimaryGeneratedColumn } = require("typeorm");
import { User } from './user';




@Entity()
export class Projects {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({
        type: "text",
        nullable:false
    })
    name: string

    @Column("text")
    description: string

    
    @Column({
        type: "text",
        nullable:false
    })
    repoUrl: string

    
    @Column("text")
    liveUrl: string

    @ManyToOne(() => User, (user) => user.projects)
    user: User
    
}