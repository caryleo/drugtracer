var hello = artifacts.require("hello");
var CallTest = artifacts.require("CallTest");
var add = artifacts.require("add")
var strings = artifacts.require("strings")
module.exports = function(deployer) {
  // deployment step
  deployer.deploy(hello);
  deployer.deploy(CallTest);
  deployer.deploy(add);
  deployer.deploy(strings);
};
