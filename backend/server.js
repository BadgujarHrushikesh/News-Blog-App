const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
const port = 8000
const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')
const cors = require('cors')
app.use(cors())



app.use(express.json());

app.use('/api/newsitems',newsRoute)
app.use('/api/users',userRoute)

app.get('/',(req,res)=>{
    res.send("Hello From server")
})

app.listen(port,()=>{
    console.log(`The server is started at http://localhost:${port}`);
    
})