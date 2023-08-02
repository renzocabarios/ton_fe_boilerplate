import { ethers } from "hardhat";

describe("Minting the token and returning it", function () {
  it("should the contract be able to mint a function and return it", async function () {
    const metadata =
      "https://github.com/tinydinosnft/tinydinosassets/blob/main/images/dinos/1600x1600/original/1.png"; //Random metadata url

    const DinoRawrContract = await ethers.getContractFactory("DinoRawr"); // Getting the contract

    const dinoRawrContract = await DinoRawrContract.deploy(); //Deploying the Contract

    const transaction = await dinoRawrContract.createToken(metadata); // Minting the token
    const tx = await transaction.wait(); // Waiting for the token to be minted
  });
});
