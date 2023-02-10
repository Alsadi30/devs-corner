const router = require('express').Router();
const userRoutes = require('./userRoute');
const authenticate = require('../middleware/authenticate')
const authRoutes = require('./authRoute')


router.use('/api/v1/auth', authRoutes );
router.use('/api/v1/users',authenticate, userRoutes);





module.exports = router;

export {};