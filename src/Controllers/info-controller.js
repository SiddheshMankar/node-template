const {StatusCodes}=require('http-status-codes');

const info=(req,res)=>{
    return res.status(StatusCodes.CREATED).json(
        {
            success:true,
            message:"api is live",
            errpr:{},
            data:{}
        }
    )
}
module.exports={
    info
}