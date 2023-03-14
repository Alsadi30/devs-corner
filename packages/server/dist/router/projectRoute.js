"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createProjectController, deleteProjectController, updateProjectController } = require('../controller/projectController');
const router = require('express').Router();
/**
 * Get  by id
 */
router.get('/:Id');
// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id', updateProjectController);
// /**
//  * @method POST
//  */
router.post('/', createProjectController);
// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteProjectController);
// /**
//  * Get all , include
router.get('/');
module.exports = router;
//# sourceMappingURL=projectRoute.js.map