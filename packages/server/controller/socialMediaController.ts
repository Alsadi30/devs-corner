const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const { Socialmedia } = require('../models/socialmedia')


const socialRepository = MyDataSource.getRepository(Socialmedia)
const userRepository = MyDataSource.getRepository(User)


const createSocialController = async (req, res, next) => {
    const userId = req.user.id
    const { url, type } = req.body

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const social = new Socialmedia()

    social.url = url
    social.type = type
    social.user = user

    try {
        const newSocial = await socialRepository.save(social)
        return res.status(200).json(newSocial)
    } catch (e) {
        console.log(e)
    }


}

const deleteSocialController = async (req, res, next) => {

    const socialId = req.params.Id

    const social = await socialRepository.findOneBy({ id: socialId })

    if (!social) {
        throw Error('Link not found')
    }
    try {
        await socialRepository.remove(social)
        return res.status(203).send()
    } catch (e) {
        console.log(e)
    }

}



module.exports = {
    createSocialController,
    deleteSocialController
}


