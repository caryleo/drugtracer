pragma solidity ^0.4.0;
//消费者类
contract Customer {
    
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
}