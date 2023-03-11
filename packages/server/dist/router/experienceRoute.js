"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { createExperienceController, deleteExperienceController, getExperienceController, updateExperienceController } = require('../controller/experienceController');
/**
 * Get  by id
 */
router.get('/:Id');
// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id', updateExperienceController);
// /**
//  * @method POST
//  */
router.post('/', createExperienceController);
// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteExperienceController);
// /**
//  * Get all , include
router.get('/', getExperienceController);
module.exports = router;
//# sourceMappingURL=experienceRoute.js.map