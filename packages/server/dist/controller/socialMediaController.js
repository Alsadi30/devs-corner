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
const { Socialmedia } = require('../models/socialmedia');
const socialRepository = MyDataSource.getRepository(Socialmedia);
const userRepository = MyDataSource.getRepository(User);
const createSocialController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { url, type } = req.body;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    const social = new Socialmedia();
    social.url = url;
    social.type = type;
    social.user = user;
    try {
        const newSocial = yield socialRepository.save(social);
        return res.status(200).json(newSocial);
    }
    catch (e) {
        console.log(e);
    }
});
const deleteSocialController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const socialId = req.params.Id;
    const social = yield socialRepository.findOneBy({ id: socialId });
    if (!social) {
        throw Error('Link not found');
    }
    try {
        yield socialRepository.remove(social);
        return res.status(203).send();
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = {
    createSocialController,
    deleteSocialController
};
//# sourceMappingURL=socialMediaController.js.map