require('dotenv').config();
const { API_KEY, P_KEY, POLY_URL } = process.env;
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  etherscan:{
    apiKey:API_KEY
  },
  networks: {
    hardhat: {
    },
    // Sensitive contents are hidden
    mumbai: {
      //url from alchemy paste here 
      url: POLY_URL,
      //private key from Metamask paste here 
      accounts: [`0x${P_KEY}`],
    }
  },
};