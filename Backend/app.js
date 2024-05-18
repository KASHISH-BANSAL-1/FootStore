const express  = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose =  require('mongoose');
const cors = require('cors');
const shoeRoute = require('./routes/shoeRoute')
const userRoute = require('./routes/userRoute')
dotenv.config()
const PORT = process.env.PORT|| 4001
app.use(cors()); // network error, axios se http req k lite
app.use(express.json()); //to parse the data

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/foot')
  .then(() => console.log('Database Connected!'))
  .catch((err)=>{console.log("Error while connection DB",err);
  })

app.use(express.urlencoded({extended:true}))

app.use(shoeRoute)
app.use(userRoute)

app.listen(PORT,()=>{
    console.log(`Sever connected at ${PORT}`);
    
})


// kashishag303
// ksVYZEm3h5z6VxfX