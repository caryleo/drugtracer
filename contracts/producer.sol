pragma solidity ^0.4.0;
contract producer {
    struct ProducerDetail {
        string  drug;           //药品名称
        bool    state;          //合格状态
        address prodecerCode;   //厂商编号
        string  producer        //厂商名称
        string  producerDate    //
    }
    mapping (uint number => ProducerDetail) someMapping
}
