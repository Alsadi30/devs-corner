const { createSkillController, deleteSkillController, addSkilltoUser, getAllSkill, removeSkilltoUser } = require('../controller/skillController')
const upload = require('../middleware/multer')
const router = require('express').Router();
const authenticate = require('../middleware/authenticate')


// /**
//  * Update user by id with skill
//  * @method POST
//  */
router.post('/:skillId', authenticate, addSkilltoUser)


/**
 * Get  by id 
 */
router.post('/', upload.single('thumbnail'), createSkillController);

router.delete('/:skillId', authenticate, removeSkilltoUser)


// /**
//  * Update  by id
//  * @method PUT
//  */
router.put('/:Id',);


// /**
//  * Delete  by id
//  */
// router.delete('/:Id', deleteSkillController);

// /**
//  * Get all 

router.get('/', authenticate, getAllSkill);



module.exports = router;


export { }