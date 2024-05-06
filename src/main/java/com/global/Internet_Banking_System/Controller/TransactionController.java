package com.global.Internet_Banking_System.Controller;

import com.global.Internet_Banking_System.DTO.TransferRequestDto;
import com.global.Internet_Banking_System.service.TransactionService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/transfer")
//اشغلو لما ارن الفرونت
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@NoArgsConstructor
public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @PostMapping("")
    public ResponseEntity<?> findById(@RequestBody TransferRequestDto transferRequestDto){
        return ResponseEntity.ok( transactionService.saveTransaction(transferRequestDto));
    }
    @GetMapping("/{userId}")
    public ResponseEntity<?> findBySourceAccount(@PathVariable Long userId,@RequestParam  Long accountNumber){
        return ResponseEntity.ok( transactionService.findBySourceAccount(userId,accountNumber));
    }
}
