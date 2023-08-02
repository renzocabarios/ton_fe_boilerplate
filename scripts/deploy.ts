import { ethers } from "hardhat";

async function main() {
  const DinoRawr = await ethers.getContractFactory("DinoRawr");
  const dinoRawr = await DinoRawr.deploy();
  console.log("Contract Deployed to Address:", await dinoRawr.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
