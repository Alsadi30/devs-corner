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
exports.Profile = void 0;
const { Column, Entity, OneToOne, PrimaryGeneratedColumn } = require("typeorm");
const user_1 = require("./user");
let Profile = class Profile {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "displayname", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "bio", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "about", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "profilePic", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "coverPic", void 0);
__decorate([
    Column({
        type: "date",
        nullable: true
    }),
    __metadata("design:type", Date)
], Profile.prototype, "dateofBirth", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "nationality", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "location", void 0);
__decorate([
    Column({
        type: "text",
        nullable: true
    }),
    __metadata("design:type", String)
], Profile.prototype, "gender", void 0);
__decorate([
    OneToOne(() => user_1.User, (user) => user.profile) // specify inverse side as a second parameter
    ,
    __metadata("design:type", user_1.User)
], Profile.prototype, "user", void 0);
Profile = __decorate([
    Entity()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map