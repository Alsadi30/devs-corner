
const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const { Experience } = require('../models/experience')


const experienceRepository = MyDataSource.getRepository(Experience)
const userRepository = MyDataSource.getRepository(User)


const createExperience = async (req, res, next) => {
    const userId = req.user.id
    const { position, companyName, startAt, endAt } = req.body

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const experience = new Experience()

    experience.position = position
    experience.companyName = companyName



}



export { }