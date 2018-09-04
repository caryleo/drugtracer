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
    //return:true成功，false失败
    function setProduce (
                        string drugCode,
                        string drug,
                        address producer,
                        string produceDate)
                        public returns (bool) {
        ProduceDetail memory drugInfo = ProduceDetail(drug, true, producer, produceDate);
        produceList[drugCode] = drugInfo;
        return true;
    }

    //插入流入市场记录，交易单号为交易的hash值，返回处理结果（布尔值）
    //number:流入交易单号
    //drugCode:药品批号
    //volume:交易量
    //toMerchant:销售商地址
    //return:true成功，false失败
    function setInflow (
                        string number,
                        string drugCode,
                        uint volume,
                        address toMerchant)
                        public returns (bool) {
        InflowDetail memory inflowInfo = InflowDetail(drugCode, volume, toMerchant);
        inflowList[number] = inflowInfo;
        setSimpleInflow(toMerchant, number);
        return true;
    }

    function setSimpleInflow (address to, string number) internal {
        simpleInflowList[to].push(number);
    }
}
