const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const userService = require('../service/userService');



const userRepository = MyDataSource.getRepository(User)




const getUsers = async (req, res, next) => {

	try {
		const users = await userService.findUsers();
		console.log(users)
		return res.status(200).json(users);
	} catch (e) {
		console.log(e)
		next(e);
	}
};

const getUserByID = async (req, res, next) => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserByProperty('id', userId);

		if (!user) {
			throw Error('User not found');
		}

		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};



const putUserById = async (req, res, next) => {
	const { Id } = req.params;
	const { username, email, phone, role, isVarified } = req.body;

	try {
		const user = await userService.updateUser(Id, {
			username,
			email,
			role,
			isVarified,
			phone
		});

		if (!user) {
			throw Error('User not found');
		}

		return res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};



const deleteUserById = async (req, res, next) => {
	const { userId } = req.params;

	try {
		const user = await userService.findUserByProperty('id', userId);

		if (!user) {
			throw Error('User not found');
		}

		await userRepository.remove(user);
		return res.status(203).send();
	} catch (e) {
		next(e);
	}
};





module.exports = {
	getUsers,
	getUserByID,
	putUserById,
	deleteUserById,
};


