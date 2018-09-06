pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;
import "../strings.sol";
contract add{
    //using strings for *;
    struct ProduceDetail {
        string  drug;           //药品名称
   //出厂日期
        bool    isValid;
    }
    //ProduceDetail detail;
    
    //出厂信息映射
    mapping (string => ProduceDetail) produceList;
    
    function setProduce (
                        string  drugCode,
                        string  drug)
                        public returns (bool) {
        //code = drugCode;
        ProduceDetail memory drugInfo = ProduceDetail(drug ,true);
        if (produceList[drugCode].isValid == false) {
            produceList[drugCode] = drugInfo;
            return true;
        }
        else {
            return false;
        }
    }
    function get1(string code) public view returns(ProduceDetail)
    {
        ProduceDetail detail = produceList[code];
        return detail;
    }
    function get(string code) public view returns(string,bool){
        ProduceDetail detail = produceList[code];
        return (detail.drug,detail.isValid);
    }
}