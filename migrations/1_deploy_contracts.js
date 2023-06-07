var FYPToken = artifacts.require('FYPToken.sol');

module.exports = function (deployer) {
  deployer.deploy(FYPToken);
}