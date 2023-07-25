require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
  networks: {
    testnet: {
      chainId: 943,
      url: "https://rpc.v4.testnet.pulsechain.com/",
      accounts: (process.env.PKEYS || "").split(","),
      gasPrice: 5e10,
      urls: {
        apiURL: "https://scan.v4.testnet.pulsechain.com/api",
        browserURL: "https://scan.v4.testnet.pulsechain.com"
      }
    },
    mainnet: {
      chainId: 369,
      url: "https://rpc.pulsechain.com/",
      accounts: (process.env.PKEYS || "").split(","),
      gasPrice: 5e10
    }
  },
  etherscan: {
    apiKey: {
      testnet: '0',
      mainnet: '0'
    },
    customChains: [
      {
        network: 'testnet',
        chainId: 943,
        urls: {
          apiURL: "https://scan.v4.testnet.pulsechain.com/api",
          browserURL: "https://scan.v4.testnet.pulsechain.com"
        }
      },
      {
        network: 'mainnet',
        chainId: 369,
        urls: {
          apiURL: "https://scan.pulsechain.com/api",
          browserURL: "https://scan.pulsechain.com"
        }
      }
    ]
  }
};
