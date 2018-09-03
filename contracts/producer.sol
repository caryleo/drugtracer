pragma solidity ^0.4.0;
//药厂类
contract Producer {

    //出厂信息
    struct ProduceDetail {
        string  drug;           //药品名称
        bool    state;          //合格状态
        address prodecerCode;   //厂商地址
        string  producer;       //厂商名称
        string  producerDate;   //出厂日期
    }

    //出厂信息映射
    mapping (uint => ProduceDetail) ProduceList;

    //流入市场信息
    struct InflowDetail {
        uint    drugCode;   //药品批号
        uint    volume;     //交易量
        address to;         //销售商地址
    }

    //流入市场信息映射
    mapping (string => InflowDetail) InflowList;

    //流入记录
    mapping (uint => string) SimpleInflowList;
}
