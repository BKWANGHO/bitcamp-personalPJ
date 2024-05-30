package com.jsggun.api.account;

import com.jsggun.api.account.model.AccountDto;
import com.jsggun.api.account.service.AccountService;
import com.jsggun.api.common.component.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AccountController {
private final AccountService service;

    @PostMapping("/save")
    public ResponseEntity<Messenger> save(@RequestBody AccountDto accountDto){
        return ResponseEntity.ok(service.save(accountDto));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam long id){
        return ResponseEntity.ok(service.deleteById(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<AccountDto>> findAll(@RequestParam Long id){
        return ResponseEntity.ok(service.findByUser(id));
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<AccountDto>> findById(@RequestParam long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count(){
        return ResponseEntity.ok(service.count());
    }

    @GetMapping("/exists/{id}")
    public ResponseEntity<Boolean> existsById(@RequestParam long id){
        return ResponseEntity.ok(service.existsById(id));
    }

}
