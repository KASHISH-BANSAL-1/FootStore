const Shoe = require('../model/shoe')

 const getShoe=async (req,res)=>{
    try {
        const shoe = await Shoe.find();
        res.status(200).json(shoe);
    } catch (error) {
        console.log("Error",err);
        res.status(500).json(shoe)
        
        
    }
}

module.exports =  getShoe ;