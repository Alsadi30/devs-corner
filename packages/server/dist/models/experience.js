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
exports.Experience = void 0;
const { Column, Entity, ManyToOne, PrimaryGeneratedColumn } = require("typeorm");
const user_1 = require("./user");
let Experience = class Experience {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Experience.prototype, "id", void 0);
__decorate([
    Column({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Experience.prototype, "position", void 0);
__decorate([
    Column({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Experience.prototype, "companyName", void 0);
__decorate([
    Column({
        type: "date",
        nullable: false
    }),
    __metadata("design:type", Date)
], Experience.prototype, "startAt", void 0);
__decorate([
    Column({
        type: "date",
        nullable: true
    }),
    __metadata("design:type", Date)
], Experience.prototype, "endAt", void 0);
__decorate([
    ManyToOne(() => user_1.User, (user) => user.experience),
    __metadata("design:type", user_1.User)
], Experience.prototype, "user", void 0);
Experience = __decorate([
    Entity()
], Experience);
exports.Experience = Experience;
//# sourceMappingURL=experience.js.map