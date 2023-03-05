
const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const { Experience } = require('../models/experience')


const experienceRepository = MyDataSource.getRepository(Experience)
const userRepository = MyDataSource.getRepository(User)


const createExperienceController = async (req, res, next) => {
    const userId = req.user.id
    const { position, companyName, startAt, endAt } = req.body

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const experience = new Experience()

    experience.position = position
    experience.companyName = companyName
    experience.startAt = startAt
    experience.endAt = endAt
    experience.user = user

    try {
        const newExperience = await experienceRepository.save(experience)
        return res.status(201).json(newExperience)
    } catch (e) {
        console.log(e)
    }


}



const updateExperienceController = async (req, res, next) => {

    const id = req.params.id
    const { position, companyName, startAt, endAt } = req.body
    try {
        const newExperience = await experienceRepository.update(id, {
            position, companyName, startAt, endAt
        })
        return res.status(202).json(newExperience)
    } catch (e) {
        console.log(e)
    }


}




const deleteExperienceController = async (req, res, next) => {


    const experienceId = req.params.Id
    console.log(experienceId)

    const experience = await experienceRepository.findOneBy({ id: experienceId })

    if (!experience) {
        throw Error('experience not found')
    }
    try {
        await experienceRepository.remove(experience)
        return res.status(203).send()
    } catch (e) {
        console.log(e)
    }



}


const getExperienceController = async (req, res, next) => {
    try {
        let experiences = await experienceRepository.find()
        return res.status(200).json(experiences)
    } catch (e) {
        console.log(e)
    }
}



module.exports = {
    createExperienceController,
    deleteExperienceController,
    getExperienceController,
    updateExperienceController
}

