pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
import "../strings.sol";

contract CallTest {
    using strings for *;
     
    function foo (string s1, string s2) public view  returns(string){
        string memory  s = s1.toSlice().concat(s2.toSlice());
        return s;
    }

}
