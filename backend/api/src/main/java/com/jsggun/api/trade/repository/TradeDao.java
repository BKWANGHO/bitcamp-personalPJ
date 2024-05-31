package com.jsggun.api.trade.repository;

import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.trade.model.TradeDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TradeDao {


    List<Trade> getListByProductName(String prdtName);
}
