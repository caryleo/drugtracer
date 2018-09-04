var Migrations = artifacts.require("./Migrations.sol");
//var testarray = artifacts.require("testarray");
//var hello = artifacts.require("hello");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  //deployer.deploy(hello);
  //deployer.deploy(testarray);
};
