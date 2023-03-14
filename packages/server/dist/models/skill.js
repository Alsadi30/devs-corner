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
exports.Skill = void 0;
const { Column, Entity, ManyToOne, PrimaryGeneratedColumn } = require("typeorm");
const skilltype_1 = require("./skilltype");
let Skill = class Skill {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Skill.prototype, "id", void 0);
__decorate([
    Column({
        type: "text",
    }),
    __metadata("design:type", String)
], Skill.prototype, "name", void 0);
__decorate([
    Column("text"),
    __metadata("design:type", String)
], Skill.prototype, "thumbnail", void 0);
__decorate([
    ManyToOne(() => skilltype_1.SkillType, (skilltype) => skilltype.skills),
    __metadata("design:type", skilltype_1.SkillType)
], Skill.prototype, "skilltype", void 0);
Skill = __decorate([
    Entity()
], Skill);
exports.Skill = Skill;
//# sourceMappingURL=skill.js.map