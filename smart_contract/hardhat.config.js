require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6VLRJhHvol6oTpXNsO3hVp9ioam100Wy',
      accounts: ['f925400d392d5ffa485c1f84c63d7de845bb467523cfe1a54bf4ed9c1ed1ea68'],
    },
  },
};