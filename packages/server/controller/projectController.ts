
const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const { Projects } = require('../models/projects')


const projectRepository = MyDataSource.getRepository(Projects)
const userRepository = MyDataSource.getRepository(User)


const createProjectController = async (req, res, next) => {
    const userId = req.user.id
    const { name, description, repoUrl, liveUrl } = req.body

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const project = new Projects()

    project.name = name
    project.description = description
    project.repoUrl = repoUrl
    project.liveUrl = liveUrl
    project.user = user

    try {
        const newProject = await projectRepository.save(project)
        return res.status(200).json(newProject)
    } catch (e) {
        console.log(e)
    }


}

const deleteProjectController = async (req, res, next) => {


    const projectId = req.params.Id


    const project = await projectRepository.findOneBy({ id: projectId })

    if (!project) {
        throw Error('experience not found')
    }
    try {
        await projectRepository.remove(project)
        return res.status(203).send()
    } catch (e) {
        console.log(e)
    }



}


// const getExperienceController = async (req, res, next) => {
//     try {
//         let experiences = await experienceRepository.find()
//         return res.status(200).json(experiences)
//     } catch (e) {
//         console.log(e)
//     }
// }



module.exports = {
    createProjectController,
    deleteProjectController
}


export { }