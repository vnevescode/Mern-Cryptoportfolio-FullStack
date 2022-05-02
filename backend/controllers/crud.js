
const CryptoCurrencySchema = require('../models/crud');
const coinGeckoAPI = require('../coinGeckoAPI');

// Cryptos Ids get from CoinGecko API website
const cryptoCurrencyList = [
    "bitcoin",
    "ethereum",
    "binancecoin",
    "bscstarter",
    "dogecoin",
    "matic-network",
    "enjincoin",
    "the-graph",
    "solana",
    "ripple",
    "terra-luna",
    "cardano",
    "polkadot",
    "shiba-inu",
]

const getAllData = async (req,res) => {
    try {
        const crud = await CryptoCurrencySchema.find({});        
        const data_coingecko_api = await coinGeckoAPI(cryptoCurrencyList);
        res.status(200).json({ crud, data_coingecko_api });
    } catch (error) {
        res.status(500).json({message:error})
    }  
}


const createData = async (req,res) => {
    try {
        const coin = req.body;         
        const element = await CryptoCurrencySchema.exists({name:coin.name});   
          
        // Check if element already exists
        if(!element){           
            const newRegister = await CryptoCurrencySchema.create(req.body)
            res.status(201).json({newRegister});
        }
        else{            
            const coinInDataBase = await CryptoCurrencySchema.findOne({_id:element._id});            
            const newQuantity = coin.quantity + coinInDataBase.quantity;          
            coin.quantity = newQuantity;            
            const createNewOne = await CryptoCurrencySchema.findByIdAndUpdate({_id:element._id}, coin,{
                new: true,
                runValidators: true
            });
            res.status(201).json({coin});
        }
                
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getOneItem = async (req,res) => {
    try {
        const {itemID:crudID} = req.params;
        const crud = await CryptoCurrencySchema.findOne({_id:crudID});

        if(!crud){
            return res.status(404).json({message: 'Item does not exist !'});
        }

        res.status(200).json({crud});
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const updateData = async (req,res) => {
    try {
        const {itemID:crudID} = req.params;
        const crud = await CryptoCurrencySchema.findByIdAndUpdate({_id:crudID}, req.body,{
            new: true,
            runValidators: true
        });

        if(!crud){
            return res.status(404).json({ message: "No Item/Items with that Id was/were found!"});
        }
        res.status(200).json({crud});
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteData = async (req,res) => {
    try {
        const {itemID:crudID} = req.params;
        const crud = await CryptoCurrencySchema.findByIdAndDelete({_id:crudID});

        if(!crud){
            return res.status(404).json({message:'No Item with that ID'});
        }
        res.status(200).json({crud});
    } catch (error) {
        res.status(500).json({message:error})
    }
}


module.exports = {
    getAllData,    
    createData,
    getOneItem,
    updateData,
    deleteData,    
}