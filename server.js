const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/rokomari')
        .then(()=> console.log('database connected successfully'))
        .catch(()=> console.log('database connection failed'))


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});