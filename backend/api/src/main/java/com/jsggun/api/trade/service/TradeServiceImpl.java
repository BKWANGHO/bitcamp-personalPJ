package com.jsggun.api.trade.service;

import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.trade.model.TradeDto;
import com.jsggun.api.trade.repository.TradeRepository;
import com.jsggun.api.account.model.Account;
import com.jsggun.api.account.repository.AccountRepository;
import com.jsggun.api.common.component.Messenger;
import com.jsggun.api.user.model.User;
import com.jsggun.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeServiceImpl implements TradeService {
    private final TradeRepository repository;
    private final AccountRepository accountRepo;
    @Override
    public Messenger save(TradeDto tradeDto) {
        return null;
    }

    @Override
    public Messenger deleteById(Long id) {
        return null;
    }

    @Override
    public Optional<TradeDto> modify(TradeDto tradeDto) {
        return Optional.empty();
    }

    @Override
    public List<TradeDto> findAll() {
        return repository.findAll()
                .stream().map(i->entityToDto(i)).toList();
    }

    @Override
    public Optional<TradeDto> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public boolean existsById(Long id) {
        return false;
    }


    @Override
    public List<TradeDto> findByAcno(Long id) {
        Account ac = accountRepo.findById(id).get();
        return repository.findByAccount(ac)
                .stream().map(i->entityToDto(i)).toList();
    }

    @Override
    public List<TradeDto> findByProductNo(String prdtName) {
        log.info("임플 확인 {}" ,repository.getListByProductName(prdtName) );
        return repository.getListByProductName(prdtName)
                .stream().map(i->entityToDto(i)).toList();
    }

}