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
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const MyDataSource = require('../config/database');
const userRepository = MyDataSource.getRepository(User);
function authenticate(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, 'secret-key');
            const user = yield userRepository.findOneBy({ id: decoded.id });
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = user;
            next();
        }
        catch (e) {
            return res.status(400).json({ message: 'Invalid token' });
        }
    });
}
module.exports = authenticate;
//# sourceMappingURL=authenticate.js.map