package com.jsggun.api.trade.service;

import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.trade.model.TradeDto;
import com.jsggun.api.account.model.Account;
import com.jsggun.api.common.service.CommandService;
import com.jsggun.api.common.service.QueryService;

import java.util.List;


public interface TradeService extends CommandService<TradeDto>, QueryService<TradeDto> {


    default Trade dtoToEntity(TradeDto tradeDto, Account account){
        return Trade.builder()
                .id(tradeDto.getId())
                .ordDt(tradeDto.getOrdDt())
                .ordGnoBrno(tradeDto.getOrdGnoBrno())
                .odno(tradeDto.getOdno())
                .ordDvsnName(tradeDto.getOrdDvsnName())
                .sllBuyDvsnCd(tradeDto.getSllBuyDvsnCd())
                .sllBuyDvsnCdName(tradeDto.getSllBuyDvsnCdName())
                .pdno(tradeDto.getPdno())
                .prdtName(tradeDto.getPrdtName())
                .ordTmd(tradeDto.getOrdTmd())
                .ordQty(tradeDto.getOrdQty())
                .totCcldQty(tradeDto.getTotCcldQty())
                .avgPrvs(tradeDto.getAvgPrvs())
                .totCcldAmt(tradeDto.getTotCcldAmt())
                .ordDvsnCd(tradeDto.getOrdDvsnCd())
                .account(account)
                .build();
    }

    default TradeDto entityToDto(Trade trade){
        return TradeDto.builder()
                .id(trade.getId())
                .ordDt(trade.getOrdDt())
                .ordGnoBrno(trade.getOrdGnoBrno())
                .odno(trade.getOdno())
                .ordDvsnName(trade.getOrdDvsnName())
                .sllBuyDvsnCd(trade.getSllBuyDvsnCd())
                .sllBuyDvsnCdName(trade.getSllBuyDvsnCdName())
                .pdno(trade.getPdno())
                .prdtName(trade.getPrdtName())
                .ordTmd(trade.getOrdTmd())
                .ordQty(trade.getOrdQty())
                .totCcldQty(trade.getTotCcldQty())
                .avgPrvs(trade.getAvgPrvs())
                .totCcldAmt(trade.getTotCcldAmt())
                .ordDvsnCd(trade.getOrdDvsnCd())
                .account(trade.getAccount().getId())
                .regDate(String.valueOf(trade.getRegDate()))
                .modDate(String.valueOf(trade.getRegDate()))
                .build();
    }


    List<TradeDto> findByAcno(Long acno);
}
