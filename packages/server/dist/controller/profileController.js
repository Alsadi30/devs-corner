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
const { Profile } = require('../models/profile');
const { User } = require('../models/user');
const MyDataSource = require('../config/database');
const profileRepository = MyDataSource.getRepository(Profile);
const userRepository = MyDataSource.getRepository(User);
const createProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const userId = req.user.id;
    const { displayname, bio, about, dateofBirth, nationality, location, gender } = req.body;
    const profilePic = !!((_a = req.files) === null || _a === void 0 ? void 0 : _a.profilePic) ? req.files.profilePic[0].filename : null;
    const coverPic = !!((_b = req.files) === null || _b === void 0 ? void 0 : _b.coverPic) ? req.files.coverPic[0].filename : null;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    const profile = new Profile();
    profile.displayname = displayname;
    profile.bio = bio;
    profile.about = about;
    profile.dateofBirth = dateofBirth;
    profile.nationality = nationality;
    profile.location = location;
    profile.gender = gender;
    profile.profilePic = profilePic;
    profile.coverPic = coverPic;
    profile.user = user;
    try {
        const newProfile = yield profileRepository.save(profile);
        return res.status(200).json(newProfile);
    }
    catch (e) {
        console.log(e);
    }
});
const editProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const id = req.params.Id;
    const userId = req.user.id;
    const { displayname, bio, about, dateofBirth, nationality, location, gender } = req.body;
    const profilePic = !!((_c = req.files) === null || _c === void 0 ? void 0 : _c.profilePic) ? req.files.profilePic[0].filename : null;
    const coverPic = !!((_d = req.files) === null || _d === void 0 ? void 0 : _d.coverPic) ? req.files.coverPic[0].filename : null;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    try {
        const updatedProfile = yield profileRepository.update(id, {
            bio: bio,
            displayname: displayname,
            about: about,
            dateofBirth: dateofBirth,
            nationality: nationality,
            location: location,
            gender: gender,
            profilePic: profilePic,
            coverPic: coverPic
        });
        return res.status(200).json(updatedProfile);
    }
    catch (e) {
        console.log(e);
    }
});
const deleteProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const profileId = req.params.Id;
    const profile = yield profileRepository.findOneBy({ id: profileId });
    if (!profile) {
        throw Error('profile not found');
    }
    try {
        yield profileRepository.remove(profile);
        return res.status(203).send();
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = {
    createProfileController,
    deleteProfileController,
    editProfileController
};
//# sourceMappingURL=profileController.js.map