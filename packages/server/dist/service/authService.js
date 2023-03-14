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
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByProperty, createNewUser } = require('./userService');
const registerService = ({ username, email, password, phone, role, isVarified, }) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield findUserByProperty('email', email);
    if (user)
        throw Error('User already exist');
    const salt = yield bcrypt.genSalt(10);
    const hash = yield bcrypt.hash(password, salt);
    return createNewUser({
        username,
        email,
        password: hash,
        phone,
        role,
        isVarified
    });
});
const loginService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserByProperty('email', email);
    if (!user)
        throw Error('Invalid Credential');
    console.log(user);
    const isMatch = yield bcrypt.compare(password, user.password);
    console.log(isMatch, password);
    if (!isMatch)
        throw Error('Invalid Credential');
    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, 'secret-key', { expiresIn: '24h' });
});
module.exports = {
    registerService,
    loginService,
};
//# sourceMappingURL=authService.js.map