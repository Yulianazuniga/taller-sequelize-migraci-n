let express = require('express');
const dotenv =require('dotenv')

const blockRouter = require('./routes/blocksRoutes');
dotenv.config();
const app = express();
const port = process.env.PORT   

app.use(express.json());


 app.use('/api',blockRouter);


 app.listen(port,()=>{
    console.log("servidor corriendo",port);
 });