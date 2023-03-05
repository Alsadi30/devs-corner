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
const userRepository = MyDataSource.getRepository(User);
const findUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.find({
            relations: {
                skills: true,
                experience: true,
                projects: true,
                socialmedia: true,
                credentials: true,
                profile: true,
                education: true
            }
        });
        return user;
    }
    catch (e) {
    }
});
const findUserByProperty = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    if (key === 'id') {
        return userRepository.find({
            where: {
                id: value
            },
            relations: {
                skills: {
                    skilltype: true
                },
                experience: true,
                projects: true,
                socialmedia: true,
                credentials: true,
                profile: true,
                education: true
            }
        });
    }
    let user = yield userRepository.findOneBy({ [key]: value });
    return user ? user : false;
});
const createNewUser = ({ username, email, phone, password, role, isVarified }) => {
    const user = new User();
    user.username = username,
        user.email = email,
        user.password = password,
        user.phone = phone,
        user.role = role,
        user.isVarified = isVarified ? isVarified : false;
    return userRepository.save(user);
};
const updateUser = (id, { username, email, password, phone, isVarified, role }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserByProperty('id', id);
    if (!user) {
        throw new Error('Email already in use');
    }
    user.username = username ? username : user.username,
        user.email = email ? email : user.email,
        user.password = password ? password : user.password,
        user.phone = phone ? phone : user.phone,
        user.role = role ? role : user.role,
        user.isVarified = isVarified ? isVarified : user.isVarified;
    return userRepository.save(user);
});
module.exports = {
    findUserByProperty,
    createNewUser,
    findUsers,
    updateUser,
};
//# sourceMappingURL=userService.js.map