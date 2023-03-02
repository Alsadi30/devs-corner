
const { User } = require('../models/user')
const MyDataSource = require('../config/database')
const { Credentials } = require('../models/credentials')


const credentialRepository = MyDataSource.getRepository(Credentials)
const userRepository = MyDataSource.getRepository(User)


const createCredentialController = async (req, res, next) => {

    const userId = req.user.id
    const { title, institution, cartificateUrl, cartificateId, courseDuration, achivedAt } = req.body
    const image = req.file.filename

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const credential = new Credentials()

    credential.title = title
    credential.image = image
    credential.institution = institution
    credential.cartificateUrl = cartificateUrl
    credential.cartificateId = cartificateId
    credential.courseDuration = courseDuration
    credential.achivedAt = achivedAt
    credential.user = user

    try {
        const newCredential = await credentialRepository.save(credential)
        return res.status(201).json(newCredential)
    } catch (e) {
        console.log(e)
    }


}


const updateCredentialController = async (req, res, next) => {

    const id = req.params.Id
    const { title, institution, cartificateUrl, cartificateId, courseDuration, achivedAt } = req.body
    const image = req.file.filename

    try {
        const newCredential = await credentialRepository.update(id, {
            title, institution, cartificateUrl, cartificateId, courseDuration, achivedAt, image
        })
        return res.status(202).json(newCredential)
    } catch (e) {
        console.log(e)
    }


}




const deleteCredentialController = async (req, res, next) => {


    const credentialId = req.params.Id


    const credential = await credentialRepository.findOneBy({ id: credentialId })

    if (!credential) {
        throw Error('credential not found')
    }
    try {
        await credentialRepository.remove(credential)
        return res.status(200).send()
    } catch (e) {
        console.log(e)
    }



}



module.exports = {
    createCredentialController,
    updateCredentialController,
    deleteCredentialController
}


export { }