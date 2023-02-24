const {
    createEducationController,
    deleteEducationController
} = require('../controller/educationController')
const router = require('express').Router();
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

router.get('/',);



module.exports = router;


export { }