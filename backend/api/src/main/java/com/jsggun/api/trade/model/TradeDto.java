package com.jsggun.api.trade.model;

import com.jsggun.api.account.model.Account;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class TradeDto {

    private Long id;
    private String ordDt;             //주문일
    private String ordGnoBrno;        //주문채번지점번호
    private String odno;              //주문번호
    private String ordDvsnName;       //주문구분명
    private String sllBuyDvsnCd;      //매도매수구분코드
    private String sllBuyDvsnCdName;  //매도매수구분코드명
    private String pdno;              //상품번호
    private String prdtName;          //상품명
    private String ordTmd;            //주문시각
    private String ordQty;            //주문수량
    private String totCcldQty;        //총체결수량
    private String avgPrvs;           //평균가
    private String totCcldAmt;        //총체결금액
    private String ordDvsnCd;         //주문구분코드
    private String regDate;
    private String modDate;
    private Long account;

}
