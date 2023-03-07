"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Skill } = require('../models/skill');
const { User } = require('../models/user');
const { getSingleSkillType } = require('./skillTypeController');
const MyDataSource = require('../config/database');
const userRepository = MyDataSource.getRepository(User);
const skillRepository = MyDataSource.getRepository(Skill);
const createSkillController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, Type } = req.body;
    const thumbnail = req.file.filename;
    const skillType = yield getSingleSkillType(Type);
    if (skillType) {
        try {
            const skill = new Skill();
            skill.name = name;
            skill.thumbnail = thumbnail;
            skill.skilltype = skillType;
            const newSkill = yield skillRepository.save(skill);
            return res.status(200).json(newSkill);
        }
        catch (e) {
            console.log(e);
            next(e);
        }
    }
});
const getAllSkill = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let skills = yield skillRepository.find();
    return res.status(201).json(skills);
});
const deleteSkillController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { skillId } = req.params;
    try {
        const skill = yield skillRepository.findOneBy({ id: skillId });
        if (!skill) {
            throw Error('Skill not found');
        }
        yield skillRepository.remove(skill);
        return res.status(203).send();
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
const addSkilltoUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { skillId } = req.params;
    const userId = req.user.id;
    const skill = yield skillRepository.findOneBy({ id: skillId });
    const user = yield userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            skills: true
        }
    });
    if (!skill) {
        throw Error('Skill not found');
    }
    user.skills.push(skill);
    try {
        const updatedUser = yield userRepository.save(user);
        return res.status(201).json(updatedUser);
    }
    catch (e) {
        console.log(e);
    }
});
const removeSkillFromUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { skillId } = req.params;
    const userId = req.user.id;
    const skill = yield skillRepository.findOneBy({ id: skillId });
    const user = yield userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            skills: true
        }
    });
    if (!skill) {
        throw Error('Skill not found');
    }
    user.skills = user.skills.filter(i => i.id !== skill.id);
    try {
        const updatedUser = yield userRepository.save(user);
        return res.status(201).json(updatedUser);
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = {
    createSkillController,
    deleteSkillController,
    addSkilltoUser,
    getAllSkill,
    removeSkillFromUser
};
//# sourceMappingURL=skillController.js.map