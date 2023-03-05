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
const { Projects } = require('../models/projects');
const projectRepository = MyDataSource.getRepository(Projects);
const userRepository = MyDataSource.getRepository(User);
const createProjectController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { name, description, repoUrl, liveUrl } = req.body;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    const project = new Projects();
    project.name = name;
    project.description = description;
    project.repoUrl = repoUrl;
    project.liveUrl = liveUrl;
    project.user = user;
    try {
        const newProject = yield projectRepository.save(project);
        return res.status(200).json(newProject);
    }
    catch (e) {
        console.log(e);
    }
});
const updateProjectController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.Id;
    const { name, description, repoUrl, liveUrl } = req.body;
    try {
        const newProject = yield projectRepository.update(id, {
            name, description, repoUrl, liveUrl
        });
        return res.status(200).json(newProject);
    }
    catch (e) {
        console.log(e);
    }
});
const deleteProjectController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const projectId = req.params.Id;
    const project = yield projectRepository.findOneBy({ id: projectId });
    if (!project) {
        throw Error('experience not found');
    }
    try {
        yield projectRepository.remove(project);
        return res.status(203).send();
    }
    catch (e) {
        console.log(e);
    }
});
// const getExperienceController = async (req, res, next) => {
//     try {
//         let experiences = await experienceRepository.find()
//         return res.status(200).json(experiences)
//     } catch (e) {
//         console.log(e)
//     }
// }
module.exports = {
    createProjectController,
    deleteProjectController,
    updateProjectController
};
//# sourceMappingURL=projectController.js.map