pragma solidity ^0.4.0;

contract add{
    function addnumber(uint a, uint b) pure public returns(uint,uint){
        uint number1= a+b;
        uint number2= a*b;
        return (number1,number2);
    }

}
