
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan:{
    apiKey:"MH8KJDM9PX52TUVS4AV3X9828AHPR26C41"
  },
  solidity: "0.8.9",
  defaultNetwork:"mumbai",
  networks: {
   
    
    // Sensitive contents are hidden
    mumbai: {
      //url from alchemy paste here 
      url: "https://polygon-mumbai.g.alchemy.com/v2/uKbeaR-6f9ZPSnwipmfUTEkffqfQMfh2",
      //private key from Metamask paste here
      chainId :80001,
      accounts: [`0x4f7f8008085fb63c64d1d8cf718fc07ba0ec365839398062b4d355b6aac0d54b`],
    }
  },
};