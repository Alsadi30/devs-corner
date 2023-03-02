import { Request, Response } from "express"

const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const { Education } = require('../models/education')


const educationRepository = MyDataSource.getRepository(Education)
const userRepository = MyDataSource.getRepository(User)



const createEducationController = async (req, res, next) => {
    const userId = req.user.id
    const { title, result, passingyear, institute } = req.body

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const education = new Education()

    education.title = title
    education.result = result
    education.passingyear = passingyear
    education.institute = institute
    education.user = user

    try {
        const newEducation = await educationRepository.save(education)
        return res.status(201).json(newEducation)
    } catch (e) {
        console.log(e)
    }


}




const updateEducationController = async (req: Request, res: Response) => {
    const id = req.params.Id
    const { title, result, passingyear, institute } = req.body


    try {
        const newEducation = await educationRepository.update(id, {
            title, result, passingyear, institute
        })
        return res.status(202).json(newEducation)
    } catch (e) {
        console.log(e)
    }


}






const deleteEducationController = async (req, res, next) => {


    const educationId = req.params.Id


    const education = await educationRepository.findOneBy({ id: educationId })

    if (!education) {
        throw Error('experience not found')
    }
    try {
        await educationRepository.remove(education)
        return res.status(200).send()
    } catch (e) {
        console.log(e)
    }



}



module.exports = {
    createEducationController,
    deleteEducationController,
    updateEducationController
}


export { }