const {PORT} =require('./config');
const express = require('express');
const {ServerConfig,logger}=require('./config');
const app=express();
app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1')
})

const apiroutes=require('./Routes');

app.use('/api',apiroutes);
app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    logger.info("Successfully started the server",'root',{})
});   