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
exports.Education = void 0;
const { Column, Entity, ManyToOne, PrimaryGeneratedColumn } = require("typeorm");
const user_1 = require("./user");
let Education = class Education {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Education.prototype, "id", void 0);
__decorate([
    Column({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Education.prototype, "title", void 0);
__decorate([
    Column({
        type: "float",
        nullable: false
    }),
    __metadata("design:type", Number)
], Education.prototype, "result", void 0);
__decorate([
    Column({
        type: "date",
        nullable: false
    }),
    __metadata("design:type", Number)
], Education.prototype, "passingyear", void 0);
__decorate([
    Column({
        type: "text",
        nullable: false
    }),
    __metadata("design:type", String)
], Education.prototype, "institute", void 0);
__decorate([
    ManyToOne(() => user_1.User, (user) => user.education),
    __metadata("design:type", user_1.User)
], Education.prototype, "user", void 0);
Education = __decorate([
    Entity()
], Education);
exports.Education = Education;
//# sourceMappingURL=education.js.map