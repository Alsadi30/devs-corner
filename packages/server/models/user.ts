const { Column, Entity, OneToOne, OneToMany, JoinColumn, ManyToMany, PrimaryGeneratedColumn, JoinTable } = require("typeorm");
import { Profile } from './profile';
import { Skill } from "./skill";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Credentials } from "./credentials";
import { Socialmedia } from "./socialmedia";
import { Education } from "./education";


export enum UserRole {
    DEV = "developer",
    RECRUITER = "recruiter"
}


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({
        type: "text",
        unique: true,
        nullable: false
    })
    username: string

    @Column({
        type: "text",
        unique: true,
        nullable: false
    })
    email: string

    @Column({
        type: "text",
        nullable: false
    })
    password: string

    @Column("integer")
    phone: number

    @Column("boolean")
    isVarified: boolean

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.DEV,
    })
    role: UserRole

    @OneToOne(() => Profile, (profile) => profile.user)
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Experience, (experience) => experience.user)
    experience: Experience[]

    @OneToMany(() => Projects, (projects) => projects.user)
    projects: Projects[]

    @OneToMany(() => Credentials, (credentials) => credentials.user)
    credentials: Credentials[]

    @OneToMany(() => Socialmedia, (socialmedia) => socialmedia.user)
    socialmedia: Socialmedia[]

    @OneToMany(() => Education, (education) => education.user)
    education: Education[]

    @ManyToMany(() => Skill, {
        cascade: true,
        eager: true
    })
    @JoinTable()
    skills: Skill[]
}