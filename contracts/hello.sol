pragma solidity ^0.4.2;

contract hello{

    string ret = "Hello! MUYULING!";

    function testInt(uint input) public pure returns (uint) {
        uint ans = (input + 2) * 15 - 1;
        return ans;
    }

    function testString(string input) public view returns (string, string) {
        return (ret, input);
    }
}
