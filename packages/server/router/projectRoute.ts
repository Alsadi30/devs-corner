const { createProjectController,
    deleteProjectController } = require('../controller/projectController')
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
//  * @method POST
//  */
router.post('/', createProjectController);

// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteProjectController);

// /**
//  * Get all , include

router.get('/',);



module.exports = router;


export { }