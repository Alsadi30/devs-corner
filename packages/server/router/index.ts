const router = require('express').Router();
const userRoutes = require('./userRoute');
const authenticate = require('../middleware/authenticate')
const authRoutes = require('./authRoute')
const skillTypeRoutes = require('./skillTypeRoute')
const skillRoutes = require('./skillRoute')

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', userRoutes);
router.use('/api/v1/skilltype', skillTypeRoutes)
router.use('/api/v1/skill', skillRoutes)




module.exports = router;

export { };