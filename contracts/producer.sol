pragma solidity ^0.4.0;
//药厂类
contract Producer {

    //出厂信息
    struct ProduceDetail {
        string  drug;           //药品名称
        bool    state;          //合格状态
        address producerCode;   //厂商地址
        string  produceDate;   //出厂日期
    }

    //出厂信息映射
    mapping (string => ProduceDetail) produceList;

    //流入市场信息
    struct InflowDetail {
        string  drugCode;   //药品批号
        uint    volume;     //交易量
        address toMerchant;         //销售商地址
    }

    //流入市场信息映射
    mapping (string => InflowDetail) inflowList;

    //流入记录
    mapping (address => string[]) simpleInflowList;

}
