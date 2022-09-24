
require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    // Sensitive contents are hidden
    matic: {
      //url from alchemy paste here 
      url: "https://polygon-mumbai.g.alchemy.com/v2/qZOMD0O2fNBSlqWdz-DPJ0oytyUFb3a1",
      //private key from Metamask paste here 
      accounts: [`0x4f7f8008085fb63c64d1d8cf718fc07ba0ec365839398062b4d355b6aac0d54b`],
    }
  },
};