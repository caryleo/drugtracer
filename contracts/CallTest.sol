pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
contract CallTest{
    bytes4 [] b ;
    function array() public returns(bytes4 []){
        /*b.push("12345678");
        b.push("12345678");
        b.push("12345678");
        b.push("123456");*/
        return b;
    }
}
