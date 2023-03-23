const mongoose=require('mongoose');

//mongodb://localhost:27017/userdata

mongoose.connect("mongodb+srv://tejasm123:Z4ZRssHqcA4B3yf2@cluster0.muvoouw.mongodb.net/?retryWrites=true&w=majority",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database Connected with Atlas");
}).catch((err)=>{
    console.log("No Connection to Database");
})