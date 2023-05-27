const mongoose = require('mongoose');

const { DB_NAME, DB_PASSWORD } = process.env;
const uri = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.rorfnly.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(uri, {
    UseNewUrlParser: true,
}).then(() => {
    console.log(`connection successfull...`)
}).catch((error) => {
    console.log(`connection failed...${error}`);
})