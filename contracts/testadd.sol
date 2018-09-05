pragma solidity ^0.4.0;

contract add{
    
    function addnumber(uint a, uint b) public pure returns(uint,uint){
        uint number1= a+b;
        uint number2= a*b;
        return (number1,number2);
    }

}
