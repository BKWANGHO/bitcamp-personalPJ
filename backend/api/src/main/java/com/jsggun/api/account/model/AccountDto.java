package com.jsggun.api.account.model;


import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.user.model.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Log4j2
public class AccountDto {


    private Long id;
    private String acno;
    private String acpw;
    private Integer balance;
    private String bank;
    private String acType;
    private String regDate;
    private String modDate;

    private Long user;

    private List<Trade> trades = new ArrayList<>();

}
