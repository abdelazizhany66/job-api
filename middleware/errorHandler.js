const {CustomAPIError} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomAPIError ){
      return res.status(err.statusCode).json({message:err.message})
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({message:'Something went wrong , try again later'})

}
module.exports = errorHandler