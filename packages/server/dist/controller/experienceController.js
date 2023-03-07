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
const { User } = require('../models/user');
const MyDataSource = require('../config/database');
const { Experience } = require('../models/experience');
const experienceRepository = MyDataSource.getRepository(Experience);
const userRepository = MyDataSource.getRepository(User);
const createExperienceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { position, companyName, startAt, endAt } = req.body;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    const experience = new Experience();
    experience.position = position;
    experience.companyName = companyName;
    experience.startAt = startAt;
    experience.endAt = endAt;
    experience.user = user;
    try {
        const newExperience = yield experienceRepository.save(experience);
        return res.status(201).json(newExperience);
    }
    catch (e) {
        console.log(e);
    }
});
const updateExperienceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { position, companyName, startAt, endAt } = req.body;
    try {
        const newExperience = yield experienceRepository.update(id, {
            position, companyName, startAt, endAt
        });
        return res.status(202).json(newExperience);
    }
    catch (e) {
        console.log(e);
    }
});
const deleteExperienceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const experienceId = req.params.Id;
    console.log(experienceId);
    const experience = yield experienceRepository.findOneBy({ id: experienceId });
    if (!experience) {
        throw Error('experience not found');
    }
    try {
        yield experienceRepository.remove(experience);
        return res.status(203).send();
    }
    catch (e) {
        console.log(e);
    }
});
const getExperienceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let experiences = yield experienceRepository.find();
        return res.status(200).json(experiences);
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = {
    createExperienceController,
    deleteExperienceController,
    getExperienceController,
    updateExperienceController
};
//# sourceMappingURL=experienceController.js.map