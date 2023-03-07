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
const { loginService, registerService } = require('../service/authService');
/**
    * Request Input Sources:
        - req Body
        - req Param
        - req Query
        - req Header
        - req Cookies
  */
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { username, email, password, phone } = req.body;
    // validation
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Invalid Data' });
    }
    try {
        const user = yield registerService({ username, email, password, phone });
        return res
            .status(201)
            .json({ message: 'User Created Successfully', user });
    }
    catch (e) {
        console.log(e.message);
        next(e);
    }
});
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const token = yield loginService({ email, password });
        return res.status(200).json({ message: 'Login Successful', token });
    }
    catch (e) {
        console.log(e);
        next(e);
    }
});
module.exports = {
    loginController,
    registerController,
};
//# sourceMappingURL=authController.js.map