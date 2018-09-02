var hello = artifacts.require("hello");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(hello);
};
