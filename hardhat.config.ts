import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  defaultNetwork: "sepolia",
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.URL ?? "",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
  },
};

export default config;
