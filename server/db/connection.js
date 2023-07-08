const mongoose = require('mongoose');

const url=`mongodb+srv://chat_app_admin:Vaibhav1234@cluster0.ngemhac.mongodb.net/`


mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))