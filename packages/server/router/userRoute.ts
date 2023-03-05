const userController = require('../controller/userController');
const router = require('express').Router();
/**
 * Get user by id or email
 */
router.get('/:userId', userController.getUserByID);

// /**
//  * Update user by id
//  * @method PUT
//  */
router.put('/:userId', userController.putUserById);


// /**
//  * Delete user by id
//  */
router.delete('/:userId', userController.deleteUserById);

// /**
//  * Get all users, include
//  *  - filter
//  *  - sort
//  *  - pagination
//  *  - select properties
//  * @route /api/v1/users?sort=["by","name"]
//  * @method GET
//  * @visibility Private
//  */
router.get('/', userController.getUsers);



module.exports = router;

export { }