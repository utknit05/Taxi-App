const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const io = require('socket.io')();

const index = require('./routes/index');
const bookingHandler = require('./routes/bookings');
const vehicleLocationHandler = require('./routes/vehicleLocation');

const app = express()

// views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', index)
app.get('/booking/:name', bookingHandler)
app.post('/booking', bookingHandler)

// update driver's socket id
app.put('/vehicleLocation/:id', vehicleLocationHandler)

//get nearBy drivers
app.get('/vehicleLocation', (req,res) => {
    
})



io.listen(app.listen(3000, () => {
    console.log(`Server is running at 3000`)
}));
