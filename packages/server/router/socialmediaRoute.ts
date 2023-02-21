const { createSocialController,
    deleteSocialController } = require('../controller/socialMediaController')
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
router.post('/', createSocialController);

// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteSocialController);

// /**
//  * Get all , include

router.get('/',);



module.exports = router;


export { }