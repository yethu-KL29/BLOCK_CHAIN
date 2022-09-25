
const hre = require("hardhat");

async function main() {

  const Token = await hre.ethers.getContractFactory("YethuToken");
  const YTK = await Token.deploy();

  await YTK.deployed();

  console.log(`deployed to address: ${YTK.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});