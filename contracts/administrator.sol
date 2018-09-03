pragma solidity ^0.4.0;
//监管部门
contract Administrator {
    
    //受理信息
    struct DealDetail {
        string  dealDate;   //受理日期
        bool    result;     //受理结果
    }

    //受理信息映射
    mapping (string=>DealDetail) DealList;
}