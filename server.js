 
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const DB_URL ='mongodb+srv://vindy:nmj99@mernapp.yujdqci.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> confirm.log('DB connection error',err));



app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});