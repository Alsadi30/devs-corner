const jwt = require('jsonwebtoken');
const { User } = require('../models/user')
const MyDataSource = require('../config/database')


const userRepository = MyDataSource.getRepository(User)

async function authenticate(req, res, next) {
	try {
		let token = req.headers.authorization;
		if (!token) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		token = token.split(' ')[1];
		const decoded = jwt.verify(token, 'secret-key');

		const user = await userRepository.findOneBy({ id: decoded.id });
		if (!user) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		req.user = user;
		next();
	} catch (e) {
		return res.status(400).json({ message: 'Invalid token' });
	}
}

module.exports = authenticate;

