pragma solidity ^0.4.0;
//销售商
contract Merchant {

    //流通信息
    struct RollDetail {
        string  inflowNumber;   //流入交易单号
        string  circulateDate;  //流通日期
        uint    volume;        //流通量
        address to;             //药店编号
    }

    //流通信息映射
    mapping (string=>RollDetail) rollList;

    //简化流出记录
    mapping (address=>string) simpleRollList;
    
}