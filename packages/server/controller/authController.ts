const { loginService, registerService } = require('../service/authService');

/**
	* Request Input Sources:
		- req Body
		- req Param
		- req Query
		- req Header
		- req Cookies
  */

const registerController = async (req, res, next) => {
	console.log(req.body)
	const { username, email, password, phone } = req.body;

	// validation
	if (!username || !email || !password) {
		return res.status(400).json({ message: 'Invalid Data' });
	}
	try {
		const user = await registerService({ username, email, password, phone });
		return res
			.status(201)
			.json({ message: 'User Created Successfully', user });
	} catch (e) {
		console.log(e.message)
		next(e);
	}
};

const loginController = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const token = await loginService({ email, password });
		return res.status(200).json({ message: 'Login Successful', token });
	} catch (e) {
		console.log(e)
		next(e);
	}
};

module.exports = {
	loginController,
	registerController,
};


export{}