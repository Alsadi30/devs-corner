const {
    createCredentialController,
    deleteCredentialController,
    updateCredentialController
} = require('../controller/credentialController')
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
router.put('/:Id', updateCredentialController);

// /**
//  * @method POST
//  */
router.post('/', upload.single('image'), createCredentialController);

// /**
//  * Delete  by id
//  */
router.delete('/:Id', deleteCredentialController);

// /**
//  * Get all , include

router.get('/',);



module.exports = router;


export { }