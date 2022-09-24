const hre = require("hardhat");

async function main() {

  const Aadhar = await hre.ethers.getContractFactory("AadharReg");
  const aadharReg = await Aadhar.deploy();

  await aadharReg.deployed();

  console.log(`deployed to address: ${aadharReg.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});