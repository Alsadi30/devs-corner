"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { registerController, loginController } = require('../controller/authController');
router.post('/register', registerController);
router.post('/login', loginController);
module.exports = router;
//# sourceMappingURL=authRoute.js.map