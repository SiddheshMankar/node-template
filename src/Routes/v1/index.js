const express=require('express');
const router=express.Router();
const {infoController}=require('../../Controllers');
router.get('/info',infoController.info)
module.exports=router;