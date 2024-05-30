package com.jsggun.api.account.model;

import java.util.List;

import com.jsggun.api.common.model.BaseEntity;
import com.jsggun.api.user.model.User;
import jakarta.persistence.*;
import com.jsggun.api.trade.model.Trade;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Entity(name = "accounts")
@Builder
@AllArgsConstructor
public class Account extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;
    private String acno;
    private String acpw;
    private int balance;
    private String bank;
    private String acType;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "account",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Trade> trades;


}

