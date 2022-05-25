const express = require('express')

// use the router portion of express
const router = express.Router()

const { getDogs, setDog, updateDog, deleteDog } = require('../controllers/dogController');
// We could create functions here to handle the functionality but it is a better design to have a controller layer to have those functions


router.route('/').get(getDogs).post(setDog);
router.route('/:id').put(updateDog).delete(deleteDog);

/*
router.get('/',getDogs);
router.post('/',setDog);
router.put('/:id',updateDog);
router.delete('/:id',deleteDog);
*/
/*
    router.get('/', (req, res) => {
    //res.send('get all dogs')
})
router.post('/', (req, res) => {
    //res.send('get all dogs')
    res.status(200).json({ message: 'Create a dog entry'})
})

router.put('/:id', (req, res) => {
    //res.send('get all dogs')
    res.status(200).json({ message: `Update dog entry ${req.params.id}`})

})
router.delete('/:id', (req, res) => {
    //res.send('get all dogs')
    res.status(200).json({ message: `Delete dog entry ${req.params.id}`})
})
*/

module.exports=router

