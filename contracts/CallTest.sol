pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
import "../strings.sol";

contract CallTest {
    using strings for *;
    string s; 
    function foo (string s1, string s2) public returns(string){
        s = s1.toSlice().concat(s2.toSlice());
        return s;
    }
}
