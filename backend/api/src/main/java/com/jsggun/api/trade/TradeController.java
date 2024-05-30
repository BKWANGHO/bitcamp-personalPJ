package com.jsggun.api.trade;

import com.jsggun.api.trade.model.TradeDto;
import com.jsggun.api.trade.service.TradeService;
import com.jsggun.api.common.component.Messenger;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@ApiResponses({
        @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
        @ApiResponse(responseCode = "404", description = "NOT FOUND"),
        @ApiResponse(responseCode = "200", description = "SUCCESS"),
})
@RequiredArgsConstructor
@RequestMapping("/api/trades")
@CrossOrigin(origins = "*",allowedHeaders = "*")
@Slf4j
public class TradeController {
    private final TradeService service;

    @GetMapping("/detail")
    public ResponseEntity<Optional<TradeDto>> findById(@RequestParam Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<TradeDto>> findAll(@RequestParam Long id){
        log.info("입력받은 정보 : {}");
        return ResponseEntity.ok(service.findByAcno(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count(){
        return ResponseEntity.ok( service.count());
    }

    @GetMapping("/exists")
    public ResponseEntity<Boolean> existsById(@RequestParam Long id){
        return ResponseEntity.ok(service.existsById(id));
    }


}
