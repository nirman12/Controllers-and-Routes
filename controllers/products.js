
const getAllProducts=async (req,res)=>{
    res.status(200).json({msg:"got all products"})
}

const getAllProductsTesting=async (req,res)=>{
    res.status(200).json({msg:"got all products testing"})
}

module.exports={getAllProducts,getAllProductsTesting}