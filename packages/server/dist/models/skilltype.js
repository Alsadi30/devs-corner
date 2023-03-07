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
exports.SkillType = void 0;
const skill_1 = require("./skill");
const { Column, Entity, OneToMany, PrimaryGeneratedColumn } = require("typeorm");
let SkillType = class SkillType {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], SkillType.prototype, "id", void 0);
__decorate([
    Column({
        type: "text",
    }),
    __metadata("design:type", String)
], SkillType.prototype, "name", void 0);
__decorate([
    OneToMany(() => skill_1.Skill, (skills) => skills.skilltype),
    __metadata("design:type", Array)
], SkillType.prototype, "skills", void 0);
SkillType = __decorate([
    Entity()
], SkillType);
exports.SkillType = SkillType;
//# sourceMappingURL=skilltype.js.map