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
const userService = require('../service/userService');
const userRepository = MyDataSource.getRepository(User);
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.findUsers();
        console.log(users);
        return res.status(200).json(users);
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
const getUserByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield userService.findUserByProperty('id', userId);
        if (!user) {
            throw Error('User not found');
        }
        return res.status(200).json(user);
    }
    catch (e) {
        next(e);
    }
});
const putUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    const { username, email, phone, role, isVarified } = req.body;
    try {
        const user = yield userService.updateUser(Id, {
            username,
            email,
            role,
            isVarified,
            phone
        });
        if (!user) {
            throw Error('User not found');
        }
        return res.status(200).json(user);
    }
    catch (e) {
        next(e);
    }
});
const deleteUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield userService.findUserByProperty('id', userId);
        if (!user) {
            throw Error('User not found');
        }
        yield userRepository.remove(user);
        return res.status(203).send();
    }
    catch (e) {
        next(e);
    }
});
module.exports = {
    getUsers,
    getUserByID,
    putUserById,
    deleteUserById,
};
//# sourceMappingURL=userController.js.map