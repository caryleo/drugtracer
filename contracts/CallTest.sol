pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
contract CallTest{
    string[] b ;
    function array123() public view  returns(string[]){
        b.push("123123");
        b.push("456");
        return b;
    }
}
