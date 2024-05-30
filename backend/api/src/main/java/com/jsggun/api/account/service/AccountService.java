package com.jsggun.api.account.service;

import com.jsggun.api.account.model.Account;
import com.jsggun.api.account.model.AccountDto;
import com.jsggun.api.common.service.CommandService;
import com.jsggun.api.common.service.QueryService;
import com.jsggun.api.user.model.User;

import java.util.List;

public interface AccountService extends CommandService<AccountDto>, QueryService<AccountDto> {

    default Account dtoToEntity(AccountDto accountDto, User user){
        return Account.builder()
                .id(accountDto.getId())
                .acno(accountDto.getAcno())
                .acpw(accountDto.getAcpw())
                .balance(accountDto.getBalance())
                .bank(accountDto.getBank())
                .acType(accountDto.getAcType())
                .user(user)
                .build();
    }

    default AccountDto entityToDto(Account account){
        return AccountDto.builder()
                .id(account.getId())
                .acno(account.getAcno())
                .acpw(account.getAcpw())
                .balance(account.getBalance())
                .bank(account.getBank())
                .acType(account.getAcType())
                .user(account.getUser().getId())
                .regDate(String.valueOf(account.getRegDate()))
                .modDate(String.valueOf(account.getRegDate()))
                .build();
    }


    List<AccountDto> findByUser(Long id);
}
