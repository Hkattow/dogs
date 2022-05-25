//console.log('Wov Wov');

const express = require('express');
const dotenv= require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000; // if PORT was not found

const app = express()

// Adding middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/dogs', require('./routes/dogRoutes'))
app.use(errorHandler)
/*
Moved to routes instead
// getting all subcscribers
app.get('/api/dogs', (req, res) => {
    //res.send('get all dogs')
    res.status(200).json({ message: 'Get all dogs'})
})
*/

app.listen(port,() => console.log(`Server started on port ${port}`))
