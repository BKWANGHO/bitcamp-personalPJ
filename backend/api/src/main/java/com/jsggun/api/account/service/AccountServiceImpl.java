package com.jsggun.api.account.service;

import com.jsggun.api.account.model.Account;
import com.jsggun.api.account.model.AccountDto;
import com.jsggun.api.account.repository.AccountRepository;
import com.jsggun.api.common.component.Messenger;
import com.jsggun.api.common.service.UtilService;
import com.jsggun.api.user.model.User;
import com.jsggun.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository repository;
    private final UserRepository userRepository;
    private final UtilService util;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Messenger save(AccountDto accountDto) {
        User user = userRepository.findById(accountDto.getUser()).orElseThrow();
        String encodePassword = passwordEncoder.encode(accountDto.getAcpw());
        var account = repository.save(Account.builder()
                .id(accountDto.getId())
                .acno(util.createRandomInteger(10000000,99999999)+"-01")
                .acpw(encodePassword)
                .balance(0)
                .bank(accountDto.getBank())
                .acType(accountDto.getAcType())
                .user(user)
                .build());

        return Messenger.builder()
                .message(account instanceof Account ? "SUCCESS":"FAIURE")
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        return null;
    }

    @Override
    public Optional<AccountDto> modify(AccountDto accountDto) {
        return Optional.empty();
    }

    @Override
    public List<AccountDto> findAll() {
        return null;
    }

    @Override
    public Optional<AccountDto> findById(Long id) {
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
    public List<AccountDto> findByUser(Long id) {
        User user = userRepository.findById(id).get();
        return repository.findByUser(user)
                .stream().map(i->entityToDto(i)).toList();
    }
}
