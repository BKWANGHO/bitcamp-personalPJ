package com.jsggun.api.trade.repository;

import com.jsggun.api.account.model.Account;
import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.trade.model.TradeDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface TradeRepository extends JpaRepository<Trade,Long> {


    List<Trade> findByAccount(Account account);

}
