

const router = require('express').Router();
const { createSkillTypeController, updateSkillTypeController, deleteSkillTypeController } = require('../controller/skillTypeController')
/**
 * Get  by id 
 */
const hello = () => console.log('iam hello')
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


export { }