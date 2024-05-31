package com.jsggun.api.trade.repository;

import com.jsggun.api.trade.model.QTrade;
import com.jsggun.api.trade.model.Trade;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;



@RequiredArgsConstructor
@Slf4j
public class TradeDaoImpl implements TradeDao{
    private final JPAQueryFactory factory;
    private final QTrade trade = QTrade.trade;
    @Override
    public List<Trade> getListByProductName(String prdtName) {
        log.info("쿼리dsl {}",factory.selectFrom(trade)
                .where(trade.prdtName.eq(prdtName))
                .fetch());

        return factory.selectFrom(trade)
                .where(trade.prdtName.eq(prdtName))
                .fetch();

    }
}
