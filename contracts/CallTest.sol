pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
contract CallTest{
    bytes4 [] b ;
    function array()  constant public returns(bytes4 []){
        b.push(0x12345678);
        b.push(0x12345678);
        b.push(0x12345678);
        b.push(0x123456);
        return b;
    }
}
