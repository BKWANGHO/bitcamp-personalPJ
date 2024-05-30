package com.jsggun.api.user.model;


import com.jsggun.api.account.model.Account;
import com.jsggun.api.trade.model.Trade;
import com.jsggun.api.common.model.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
@Setter
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private String job;
    private String token;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Account> accounts;

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", phoneNumber=" + phone +
                ", job='" + job + '\'' +
                '}' + '\n';
    }

}