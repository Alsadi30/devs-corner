const { Profile } = require('../models/profile')
const { User } = require('../models/user')
const MyDataSource = require('../config/database')



const profileRepository = MyDataSource.getRepository(Profile)
const userRepository = MyDataSource.getRepository(User)


const createProfileController = async (req, res, next) => {

    const userId = req.user.id
    const { displayname, bio, about, dateofBirth, nationality, location, gender } = req.body


    const profilePic = !!req.files?.profilePic ? req.files.profilePic[0].filename : null
    const coverPic = !!req.files?.coverPic ? req.files.coverPic[0].filename : null

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    const profile = new Profile()

    profile.displayname = displayname
    profile.bio = bio
    profile.about = about
    profile.dateofBirth = dateofBirth
    profile.nationality = nationality
    profile.location = location
    profile.gender = gender
    profile.profilePic = profilePic
    profile.coverPic = coverPic
    profile.user = user

    try {
        const newProfile = await profileRepository.save(profile)
        return res.status(200).json(newProfile)
    } catch (e) {
        console.log(e)
    }

}


const editProfileController = async (req, res, next) => {
    const id = req.params.Id
    const userId = req.user.id
    const { displayname, bio, about, dateofBirth, nationality, location, gender } = req.body


    const profilePic = !!req.files?.profilePic ? req.files.profilePic[0].filename : null
    const coverPic = !!req.files?.coverPic ? req.files.coverPic[0].filename : null

    const user = await userRepository.findOneBy({ id: userId })

    if (!user) {
        throw Error('User not found')
    }

    try {
        const updatedProfile = await profileRepository.update(id, {
            bio: bio,
            displayname: displayname,
            about: about,
            dateofBirth: dateofBirth,
            nationality: nationality,
            location: location,
            gender: gender,
            profilePic: profilePic,
            coverPic: coverPic
        })
        return res.status(200).json(updatedProfile)
    } catch (e) {
        console.log(e)
    }



}


const deleteProfileController = async (req, res, next) => {


    const profileId = req.params.Id

    const profile = await profileRepository.findOneBy({ id: profileId })

    if (!profile) {
        throw Error('profile not found')
    }
    try {
        await profileRepository.remove(profile)
        return res.status(203).send()
    } catch (e) {
        console.log(e)
    }

}



module.exports = {
    createProfileController,
    deleteProfileController,
    editProfileController
}


