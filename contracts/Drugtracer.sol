pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
contract DrugTracer {

    //------------------------------------------

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

    //-------------------------------------------

    //流通信息
    struct RollDetail {
        string  inflowNumber;   //流入交易单号
        string  circulateDate;  //流通日期
        uint    volume;         //流通量
        address toDrugstore;    //药店编号
    }

    //流通信息映射
    mapping (string=>RollDetail) rollList;

    //简化流出记录
    mapping (address=>string[]) simpleRollList;

    //---------------------------------------------

    //销售信息
    struct SaleDetail {
        string  circulateNumber;    //流出交易单号
        address customerNumber;     //消费者编号
        uint    volume;             //交易量
        string  saleDate;           //销售日期
    }

    //销售信息映射
    mapping (string=>SaleDetail) saleList;

    //简化销售记录
    mapping (address=>string[]) simpleSaleList;

    //---------------------------------------------

    //举报信息
    struct ReportDetail {
        string  saleNumber; //交易单号
        string  reportDate; //举报日期
        string  report;     //举报内容
        bool    state;      //受理状态
    }

    //举报信息映射
    mapping (string=>ReportDetail) reportList;

    //简单举报信息映射
    mapping (address=>string[]) simplereportList;

    //---------------------------------------------

    //受理信息
    struct DealDetail {
        string  dealDate;   //受理日期
        bool    result;     //受理结果
    }

    //受理信息映射
    mapping (string=>DealDetail) dealList;

    //举报记录
    string[] reports;

    //---------------------------------------------

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
    //------------------------------------------------
    
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
    //------------------------------------------------
    
    //插入简单记录，内部方法
    //to:
    function setSimpleInflow (address to, string number) internal {
        simpleInflowList[to].push(number);
    }
    //------------------------------------------------    

    function getInflow(string number) public returns(InflowDetail){
        return inflowList[number];
    }
    //------------------------------------------------
    
    function getProduce(string drugCode) public returns(ProduceDetail){
        return produceList[drugCode];
    }
    //------------------------------------------------
    
    function getSimpleInflow(address to) internal returns(string[]){
        return simpleInflowList[to];
    }
    //------------------------------------------------
    
    function setRoll(
                    string number,
                    string inflowNumber,
                    string circulateDate,
                    uint volume,
                    address toDrugstore)
                    public returns(bool){
        RollDetail memory RollInfo = RollDetail(inflowNumber,circulateDate,volume,toDrugstore);
        rollList[number] = RollInfo;
    }
    //------------------------------------------------
    
    //function getSimple

}
