const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByProperty, createNewUser } = require('./userService');


const registerService = async ({
	username,
	email,
	password,
	phone,
	role,
	isVarified,
}) => {
	let user = await findUserByProperty('email', email);
	if (user) throw Error('User already exist');

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	return createNewUser({
		username,
		email,
		password: hash,
		phone,
		role,
		isVarified
	});
};

const loginService = async ({ email, password }) => {
	const user = await findUserByProperty('email', email);
	if (!user) throw Error('Invalid Credential');
	console.log(user)

	const isMatch = await bcrypt.compare(password, user.password);
	console.log(isMatch, password)
	if (!isMatch) throw Error('Invalid Credential');

	const payload = {
		id: user.id,
		username: user.username,
		email: user.email,
		role: user.role,
	};
	return jwt.sign(payload, 'secret-key', { expiresIn: '24h' });
};

module.exports = {
	registerService,
	loginService,
};



export { }