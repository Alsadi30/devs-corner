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
const { Credentials } = require('../models/credentials');
const credentialRepository = MyDataSource.getRepository(Credentials);
const userRepository = MyDataSource.getRepository(User);
const createCredentialController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { title, institution, cartificateUrl, cartificateId, courseDuration, achivedAt, } = req.body;
    const image = req.file.filename;
    const user = yield userRepository.findOneBy({ id: userId });
    if (!user) {
        throw Error('User not found');
    }
    const credential = new Credentials();
    credential.title = title;
    credential.image = image;
    credential.institution = institution;
    credential.cartificateUrl = cartificateUrl;
    credential.cartificateId = cartificateId;
    credential.courseDuration = courseDuration;
    credential.achivedAt = achivedAt;
    credential.user = user;
    try {
        const newCredential = yield credentialRepository.save(credential);
        return res.status(201).json(newCredential);
    }
    catch (e) {
        console.log(e);
    }
});
const updateCredentialController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.Id;
    const { title, institution, cartificateUrl, cartificateId, courseDuration, achivedAt, } = req.body;
    const image = req.file.filename;
    try {
        const newCredential = yield credentialRepository.update(id, {
            title,
            institution,
            cartificateUrl,
            cartificateId,
            courseDuration,
            achivedAt,
            image,
        });
        return res.status(202).json(newCredential);
    }
    catch (e) {
        console.log(e);
    }
});
const deleteCredentialController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialId = req.params.Id;
    const credential = yield credentialRepository.findOneBy({
        id: credentialId,
    });
    if (!credential) {
        throw Error('credential not found');
    }
    try {
        yield credentialRepository.remove(credential);
        return res.status(200).send();
    }
    catch (e) {
        console.log(e);
    }
});
module.exports = {
    createCredentialController,
    updateCredentialController,
    deleteCredentialController,
};
//# sourceMappingURL=credentialController.js.map