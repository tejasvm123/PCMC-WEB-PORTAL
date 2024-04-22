const mongoose=require('mongoose');

//mongodb://localhost:27017/userdata

mongoose.connect("mongodb+srv://tejasm123:tejasvm123@cluster0.sig1uuh.mongodb.net/PMC?retryWrites=true&w=majority",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected with Atlas");
}).catch((err)=>{
    console.log("No Connection to Database");
})
