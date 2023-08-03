// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const feeToSetter = "0x239581446037226DCF421B1Cfc186e5583CB8C97";

  const factory = await hre.ethers.deployContract("GhostFactory", [feeToSetter]);

  await factory.waitForDeployment();

  console.log(
    `GhostFactory with _FEETOSETTER ${feeToSetter} to ${factory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
