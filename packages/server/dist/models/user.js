"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
const { Column, Entity, OneToOne, OneToMany, JoinColumn, ManyToMany, PrimaryGeneratedColumn, JoinTable } = require("typeorm");
const profile_1 = require("./profile");
const skill_1 = require("./skill");
const experience_1 = require("./experience");
const projects_1 = require("./projects");
const credentials_1 = require("./credentials");
const socialmedia_1 = require("./socialmedia");
const education_1 = require("./education");
var UserRole;
(function (UserRole) {
    UserRole["DEV"] = "developer";
    UserRole["RECRUITER"] = "recruiter";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column({
        type: "text",
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Column({
        type: "text",
        unique: true,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column("integer"),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    Column("boolean"),
    __metadata("design:type", Boolean)
], User.prototype, "isVarified", void 0);
__decorate([
    Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.DEV,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    OneToOne(() => profile_1.Profile, (profile) => profile.user),
    JoinColumn(),
    __metadata("design:type", profile_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    OneToMany(() => experience_1.Experience, (experience) => experience.user),
    __metadata("design:type", Array)
], User.prototype, "experience", void 0);
__decorate([
    OneToMany(() => projects_1.Projects, (projects) => projects.user),
    __metadata("design:type", Array)
], User.prototype, "projects", void 0);
__decorate([
    OneToMany(() => credentials_1.Credentials, (credentials) => credentials.user),
    __metadata("design:type", Array)
], User.prototype, "credentials", void 0);
__decorate([
    OneToMany(() => socialmedia_1.Socialmedia, (socialmedia) => socialmedia.user),
    __metadata("design:type", Array)
], User.prototype, "socialmedia", void 0);
__decorate([
    OneToMany(() => education_1.Education, (education) => education.user),
    __metadata("design:type", Array)
], User.prototype, "education", void 0);
__decorate([
    ManyToMany(() => skill_1.Skill, {
        cascade: true,
        eager: true
    }),
    JoinTable(),
    __metadata("design:type", Array)
], User.prototype, "skills", void 0);
User = __decorate([
    Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.js.map