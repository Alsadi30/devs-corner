
const router = require('express').Router();
const { createExperienceController, deleteExperienceController, getExperienceController } = require('../controller/experienceController')
/**
 * Get  by id 
 */
router.get('/:Id',);

// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id',);

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


export { }