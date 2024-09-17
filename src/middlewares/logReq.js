const logRequest = (req,res,next)=>{
    console.log('request API');
    next();
}

module.exports = {
    logRequest
}