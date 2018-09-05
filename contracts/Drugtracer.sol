pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
contract DrugTracer {

    //------药厂方数据结�------------------

    //出厂信息
    struct ProduceDetail {
        string  drug;           //药品名称
        bool    state;          //合格状�
        address producerCode;   //厂商地址
        string  produceDate;    //出厂日期
        uint    left;           //剩余�
        bool    isValid;
    }

    //出厂信息映射
    mapping (string => ProduceDetail) produceList;

    //流入市场信息
    struct InflowDetail {
        string  drugCode;   //药品批号
        uint    volume;     //交易�
        address toMerchant; //销售商地址
        uint    left;       //剩余�
        bool    isValid;
    }

    //流入市场信息映射
    mapping (string => InflowDetail) inflowList;

    //流入记录
    mapping (address => string[]) simpleInflowList;

    //------销售商方数据结�---------------------

    //流通信�
    struct RollDetail {
        string  inflowNumber;   //流入交易单号
        string  circulateDate;  //流通日�
        uint    volume;         //流通量
        address toDrugstore;    //药店编号
        uint    left;           //剩余�
        bool    isValid;
    }

    //流通信息映�
    mapping (string=>RollDetail) rollList;

    //简化流出记�
    mapping (address=>string[]) simpleRollList;

    //------药店方数据结�-------------------

    //销售信�
    struct SaleDetail {
        string  circulateNumber;    //流出交易单号
        address customerNumber;     //消费者编�
        uint    volume;             //交易�
        string  saleDate;           //销售日�
        bool    isValid;
    }

    //销售信息映�
    mapping (string=>SaleDetail) saleList;

    //简化销售记�
    mapping (address=>string[]) simpleSaleList;

    //------消费者方数据结果---------------------

    //举报信息
    struct ReportDetail {
        string  saleNumber; //交易单号
        string  reportDate; //举报日期
        string  report;     //举报内容
        bool    state;      //受理状�
        bool    isValid;
    }

    //举报信息映射
    mapping (string=>ReportDetail) reportList;

    //简单举报信息映�
    mapping (address=>string[]) simplereportList;

    //------监管部门方数据结�-------------------

    //受理信息
    struct DealDetail {
        string  dealDate;   //受理日期
        bool    result;     //受理结果
        bool    isValid;
    }

    //受理信息映射
    mapping (string=>DealDetail) dealList;

    //举报记录
    string[] reports;

    //------药厂方set方法--------------------

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
                        string produceDate,
                        uint left)
                        public returns (bool) {
        ProduceDetail memory drugInfo = ProduceDetail(drug, true, producer, produceDate, left, true);
        if (produceList[drugCode].isValid == false) {
            produceList[drugCode] = drugInfo;
            return true;
        }
        else {
            return false;
        }
    }
    
    //插入流入市场记录，交易单号为交易的hash值，返回处理结果（布尔值）
    //number:流入交易单号
    //drugCode:药品批号
    //volume:交易�
    //toMerchant:销售商地址
    //return:true成功，false失败
    function setInflow (
                        string number,
                        string drugCode,
                        uint volume,
                        address toMerchant)
                        public returns (bool) {
        InflowDetail memory inflowInfo = InflowDetail(drugCode, volume, toMerchant, volume, true);//初始情况下，剩余量就是交易量
        if (inflowList[number].isValid == false) {
            inflowList[number] = inflowInfo;
            setSimpleInflow(toMerchant, number);
            return true;
        }
        else {
            return false;
        }
    }
    
    //插入简单记录，内部方法
    //to:
    function setSimpleInflow (address to, string number) internal {
        simpleInflowList[to].push(number);
    }
    //------------------------------------------------    

    //------销售商方set方法---------------------
        return inflowList[number];
    }
    //------------------------------------------------
    
    function getProduce(string drugCode) public returns(ProduceDetail){
        return produceList[drugCode];
    }
    
    function setRoll (
                        string number,
                        string inflowNumber,
                        string circulateDate,
                        uint volume,
                        address toDrugStore)
                        public returns (bool) {
        //TODO: R
        return true;
    }

    //------药店方set方法-----------------------



    //------消费者方set方法------------------------



    //------监管部门方set方法----------------------------

    function setReport (
                        string number,
                        string saleNumber,
                        string reportDate,
                        string report,
                        bool state)
                        public returns (bool) {
        ReportDetail memory reportInfo = ReportDetail(saleNumber, reportDate, report, false, true);
        reportList[number] = reportInfo;
        return true;
    }

    //------药厂方get方法



    //------销售商方get方法



    //------药店方get方法



    //------消费者方get方法



    //------监管部门方get方法
}
