const asyncHandler= require('express-async-handler')

// @desc  Get entries for all dogs
// @route GET /api/dogs
// @access Private
const getDogs = asyncHandler(async(req, res) => { // async is used since mongoose is sending back a promise
    res.status(200).json({message: 'Get all dogs'})
})

// @desc  Set a dog entry
// @route POST /api/dogs
// @access Private
const setDog = asyncHandler(async(req, res) => {
    console.log(req.body)
    if (!req.body.name) {
        throw new Error('Dog name should be specified');
    }
    res.status(200).json({message: 'Create a dog entry'})
})
/*
* const setDog = (req, res) => {
    console.log(req.body)
    if (!req.body.name) {
        res.status(400).json({message: 'Dog name should be specified'})
    }
    res.status(200).json({message: 'Create a dog entry'})
}
*/

// @desc  Update a dog entry
// @route PUT /api/dogs/:id
// @access Private
const updateDog = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update dog entry ${req.params.id}`})
})

// @desc  DELETE a dog entry
// @route DELEYTE /api/dogs/:id
// @access Private
const deleteDog = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete dog entry ${req.params.id}`})
})

module.exports = {
    getDogs, setDog, updateDog, deleteDog
}
