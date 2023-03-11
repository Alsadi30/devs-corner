"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createEducationController, deleteEducationController, updateEducationController } = require('../controller/educationController');
const router = require('express').Router();
/**
 * Get  by id
 */
router.get('/:Id');
// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id', updateEducationController);
// /**
//  * Update  by id
//  * @method PATCH
//  */
router.post('/', createEducationController);
// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteEducationController);
// /**
//  * Get all , include
router.get('/');
module.exports = router;
//# sourceMappingURL=educationRoute.js.map