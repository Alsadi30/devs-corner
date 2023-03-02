const {
    createProfileController,
    deleteProfileController,
    editProfileController
} = require('../controller/profileController')
const upload = require('../middleware/multer')
const router = require('express').Router();
/**
 * Get  by id 
 */
router.get('/:Id',);

// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id', editProfileController);

// /**
//  * @method POST
//  */
router.post('/', upload.fields([{ name: 'profilePic', maxCount: 1 }, { name: 'coverPic', maxCount: 1 }]), createProfileController);

// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteProfileController);

// /**
//  * Get all , include

router.get('/',);



module.exports = router;


export { }