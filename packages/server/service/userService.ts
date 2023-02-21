export { }
const { User } = require('../models/user')
const MyDataSource = require('../config/database')




const userRepository = MyDataSource.getRepository(User)


const findUsers = async () => {

	try {
		const user = await userRepository.find({
			relations: {
				skills: true,
				experience: true,
				projects: true,
				socialmedia: true,
				credentials: true,
				profile: true,
				education: true
			}
		})
		return user
	} catch (e) {

	}
};

const findUserByProperty = async (key, value) => {
	if (key === 'id') {
		return userRepository.findOneBy({ id: value });
	}
	let user = await userRepository.findOneBy({ [key]: value });
	return user ? user : false
};

const createNewUser = ({ username, email, phone, password, role, isVarified }) => {
	const user = new User();

	user.username = username,
		user.email = email,
		user.password = password,
		user.phone = phone,
		user.role = role,
		user.isVarified = isVarified ? isVarified : false

	return userRepository.save(user);
};

const updateUser = async (id, { username, email, password, phone, isVarified, role }) => {
	const user = await findUserByProperty('id', id);
	if (!user) {
		throw new Error('Email already in use');
	}

	user.username = username ? username : user.username,
		user.email = email ? email : user.email,
		user.password = password ? password : user.password,
		user.phone = phone ? phone : user.phone,
		user.role = role ? role : user.role,
		user.isVarified = isVarified ? isVarified : user.isVarified

	return userRepository.save(user);
};

module.exports = {
	findUserByProperty,
	createNewUser,
	findUsers,
	updateUser,
};
