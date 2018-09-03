pragma solidity ^0.4.0;
//药店类
contract Drugstore {

    //销售信息
    struct SaleDetail {
        string  circulateNumber;    //流出交易单号
        address customerNumber;     //消费者编号
        uint    volume;             //交易量
        string  saleDate;           //销售日期  
    }

    //销售信息映射
    mapping (string=>SaleDetail) SaleList;

    //简化销售记录
    mapping (address=>string) SimpleSaleList;
}