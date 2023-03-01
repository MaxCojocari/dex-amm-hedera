require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-chai-matchers');
require('@nomiclabs/hardhat-ethers');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  mocha: {
    timeout: 3600000,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: 'testnet',
  networks: {
    local: {
      url: 'https://previewnet.hashio.io/api',
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 298,
    },
    testnet: {
      url: 'https://testnet.hashio.io/api',
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 296,
    },
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/kYdQOWZIPE-9fbTFQ_NJ_RqJbszUNk-w",
        blockNumber: 14989351
      }
    },
    localhost: {
      url: "http://localhost:8545",
    },
  },
};