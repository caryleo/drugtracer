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

    //插入出厂记录，state默认true，药品批号由前端生成，返回处理结果（布尔值）
    //drugCode:药品批号
    //drug:药品名称
    //producer:厂商编号
    //produceDate:出厂日期
    //return 返回函数执行成功的bool值
    function setProduce(string drugCode,string drug,address producer,string produceDate) public constant returns(bool){

        ProduceDetail druginfo;
        druginfo.drug = drug;
        druginfo.state = true;
        druginfo.producerCode = producer;
        druginfo.produceDate = produceDate;

    }
    fun
    function setInflow(string number , string drugCode , uint volume , address toMerchan) public returns(bool){

    }
}
