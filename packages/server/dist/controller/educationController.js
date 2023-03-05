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
const { Education } = require('../models/education');
const educationRepository = MyDataSource.getRepository(Education);
const userRepository = MyDataSource.getRepository(User);
const createEducationController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { title, result, passingyear, institute } = req.body;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    const education = new Education();
    education.title = title;
    education.result = result;
    education.passingyear = passingyear;
    education.institute = institute;
    education.user = user;
    try {
        const newEducation = yield educationRepository.save(education);
        return res.status(201).json(newEducation);
    }
    catch (e) {
        console.log(e);
    }
});
const updateEducationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.Id;
    const { title, result, passingyear, institute } = req.body;
    try {
        const newEducation = yield educationRepository.update(id, {
            title, result, passingyear, institute
        });
        return res.status(202).json(newEducation);
    }
    catch (e) {
        console.log(e);
    }
});
const deleteEducationController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const educationId = req.params.Id;
    const education = yield educationRepository.findOneBy({ id: educationId });
    if (!education) {
        throw Error('experience not found');
    }
    try {
        yield educationRepository.remove(education);
        return res.status(200).send();
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = {
    createEducationController,
    deleteEducationController,
    updateEducationController
};
//# sourceMappingURL=educationController.js.map