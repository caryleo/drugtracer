pragma solidity ^0.4.20;
pragma experimental ABIEncoderV2;
contract CallTest{
    string[10] b ;
    function array()  constant public returns(string[10]){
       // b.push("12345678");
       // b.push("0x123");
       // b.push("12345678");
       // b.push("123456");
        b[0] = "123";
        b[1] = "23333";
        b[3] = "4444";
        return b;
    }

}
