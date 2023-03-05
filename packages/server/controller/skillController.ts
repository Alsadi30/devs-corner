const { Skill } = require('../models/skill')
const { User } = require('../models/user')
const { getSingleSkillType } = require('./skillTypeController')
const MyDataSource = require('../config/database')

const userRepository = MyDataSource.getRepository(User)
const skillRepository = MyDataSource.getRepository(Skill)

const createSkillController = async (req, res, next) => {

    const { name, Type } = req.body;
    const thumbnail = req.file.filename

    const skillType = await getSingleSkillType(Type)

    if (skillType) {
        try {

            const skill = new Skill()
            skill.name = name
            skill.thumbnail = thumbnail
            skill.skilltype = skillType
            const newSkill = await skillRepository.save(skill)
            return res.status(200).json(newSkill);
        } catch (e) {
            console.log(e)
            next(e);
        }
    }

};



const getAllSkill = async (req, res, next) => {
    let skills = await skillRepository.find()
    return res.status(201).json(skills)
}



const deleteSkillController = async (req, res, next) => {
    const { skillId } = req.params;
    try {
        const skill = await skillRepository.findOneBy({ id: skillId })

        if (!skill) {
            throw Error('Skill not found')
        }

        await skillRepository.remove(skill)
        return res.status(203).send();
    } catch (e) {
        console.log(e)
        next(e);
    }
};



const addSkilltoUser = async (req, res, next) => {

    const { skillId } = req.params

    const userId = req.user.id

    const skill = await skillRepository.findOneBy({ id: skillId })

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            skills: true
        }

    })

    if (!skill) {
        throw Error('Skill not found')
    }

    user.skills.push(skill)

    try {
        const updatedUser = await userRepository.save(user)
        return res.status(201).json(updatedUser)
    } catch (e) {
        console.log(e)
    }
}



const removeSkillFromUser = async (req, res, next) => {

    const { skillId } = req.params

    const userId = req.user.id

    const skill = await skillRepository.findOneBy({ id: skillId })

    const user = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            skills: true
        }

    })

    if (!skill) {
        throw Error('Skill not found')
    }

    user.skills = user.skills.filter(i => i.id !== skill.id)

    try {
        const updatedUser = await userRepository.save(user)
        return res.status(201).json(updatedUser)
    } catch (e) {
        console.log(e)
    }
}



module.exports = {
    createSkillController,
    deleteSkillController,
    addSkilltoUser,
    getAllSkill,
    removeSkillFromUser
}


export { }