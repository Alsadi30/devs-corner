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
const { SkillType } = require('../models/skilltype');
const MyDataSource = require('../config/database');
const skillTypeRepository = MyDataSource.getRepository(SkillType);
const createSkillTypeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const skillType = new SkillType();
        skillType.name = name;
        const newSkillType = yield skillTypeRepository.save(skillType);
        return res.status(200).json(newSkillType);
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
const updateSkillTypeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { skillTypeId } = req.params;
    const { name } = req.body;
    try {
        const skillType = yield skillTypeRepository.findOneBy({ id: skillTypeId });
        skillType.name = name;
        const newSkillType = yield skillTypeRepository.save(skillType);
        return res.status(200).json(newSkillType);
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
const deleteSkillTypeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { skillTypeId } = req.params;
    try {
        const skillType = yield skillTypeRepository.findOneBy({ id: skillTypeId });
        if (!skillType) {
            throw Error('Skill Type not found');
        }
        yield skillTypeRepository.remove(skillType);
        return res.status(203).send();
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
const getSingleSkillType = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skillType = yield skillTypeRepository.findOneBy({ name: name });
        if (!skillType) {
            throw Error('Skill Type not found');
        }
        return skillType;
    }
    catch (e) {
        console.log(e.message);
    }
});
module.exports = {
    createSkillTypeController,
    updateSkillTypeController,
    deleteSkillTypeController,
    getSingleSkillType
};
//# sourceMappingURL=skillTypeController.js.map