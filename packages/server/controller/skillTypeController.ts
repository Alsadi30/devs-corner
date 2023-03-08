const { SkillType } = require('../models/skilltype')
const MyDataSource = require('../config/database')

const skillTypeRepository = MyDataSource.getRepository(SkillType)



const createSkillTypeController = async (req, res, next) => {

    const { name } = req.body;

    try {
        const skillType = new SkillType()
        skillType.name = name
        const newSkillType = await skillTypeRepository.save(skillType)
        return res.status(200).json(newSkillType);
    } catch (e) {
        console.log(e)
        next(e);
    }
};


const updateSkillTypeController = async (req, res, next) => {
    const { skillTypeId } = req.params;
    const { name } = req.body;
    try {
        const skillType = await skillTypeRepository.findOneBy({ id: skillTypeId })
        skillType.name = name
        const newSkillType = await skillTypeRepository.save(skillType)
        return res.status(200).json(newSkillType);
    } catch (e) {
        console.log(e)
        next(e);
    }
};



const deleteSkillTypeController = async (req, res, next) => {
    const { skillTypeId } = req.params;
    try {
        const skillType = await skillTypeRepository.findOneBy({ id: skillTypeId })

        if (!skillType) {
            throw Error('Skill Type not found')
        }

        await skillTypeRepository.remove(skillType)
        return res.status(203).send();
    } catch (e) {
        console.log(e)
        next(e);
    }
};



const getSingleSkillType = async (name) => {

    try {

        const skillType = await skillTypeRepository.findOneBy({ name: name })

        if (!skillType) {
            throw Error('Skill Type not found')
        }

        return skillType

    } catch (e) {
        console.log(e.message)

    }
};



module.exports = {
    createSkillTypeController,
    updateSkillTypeController,
    deleteSkillTypeController,
    getSingleSkillType
}


