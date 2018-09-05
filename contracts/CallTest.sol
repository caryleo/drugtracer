pragma solidity ^0.4.20;
pragma experimental ABIEncoderV2;
import "../strings.sol";

contract CallTest {
    using strings for *;
    string public s;

    function foo(string s1, string s2) {
        s = s1.toSlice().concat(s2.toSlice());
    }
}
