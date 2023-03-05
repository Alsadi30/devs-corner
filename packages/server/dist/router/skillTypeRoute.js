"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { createSkillTypeController, updateSkillTypeController, deleteSkillTypeController } = require('../controller/skillTypeController');
/**
 * Get  by id
 */
router.post('/', createSkillTypeController);
// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id', updateSkillTypeController);
// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteSkillTypeController);
// /**
//  * Get all , include
// router.get('/',);
module.exports = router;
//# sourceMappingURL=skillTypeRoute.js.map