package com.global.Internet_Banking_System.service;

import com.global.Internet_Banking_System.DTO.AddAccountDto;
import com.global.Internet_Banking_System.DTO.TransferRequestDto;
import com.global.Internet_Banking_System.Entity.Accounts;
import com.global.Internet_Banking_System.Entity.Transaction;
import com.global.Internet_Banking_System.Entity.User;
import com.global.Internet_Banking_System.repository.AccountRepo;
import com.global.Internet_Banking_System.repository.TransactionRepo;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Set;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class TransactionService {
    @Autowired
    private TransactionRepo transactionRepo;
    @Autowired
    private AccountRepo accountRepo;
    @Autowired
    private AccountService accountService;
    public ResponseEntity<Set<Transaction>>findBySourceAccount(Long userId, Long accountNumber){
//        if(transactionRepo.findBySourceAccount(accountRepo.findById(accountNumber).get()).isEmpty()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("An account with this Number ( "+accountNumber +" ) Not Exist.");
//        }
        return ResponseEntity.ok(transactionRepo.findBySourceAccount(accountRepo.findById(accountNumber).get()));
    }

    public ResponseEntity<?> saveTransaction(TransferRequestDto transferRequestDto){
        if(accountRepo.findById(transferRequestDto.getDestinationAccountNumber()).isEmpty()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An account with this Number ( "+transferRequestDto.getDestinationAccountNumber() +" ) Not Exist.");
        }
        if(accountRepo.findById(transferRequestDto.getSourceAccountNumber()).get().getBalance()<transferRequestDto.getAmount()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An Source Account Has Balance Less Than Amount ( "+transferRequestDto.getAmount() +" ) Should Transfer.");
        }
        double amount=transferRequestDto.getAmount();
        Accounts sourceAccount =accountRepo.findById(transferRequestDto.getSourceAccountNumber()).get();
        sourceAccount.setBalance(sourceAccount.getBalance()-amount);
        accountRepo.save(sourceAccount);
        Accounts destinationAccount=accountRepo.findById(transferRequestDto.getDestinationAccountNumber()).get();
        destinationAccount.setBalance(destinationAccount.getBalance()+amount);
        accountRepo.save(destinationAccount);
        Date now = new Date();
        Transaction transaction=new Transaction(null,now,amount,sourceAccount,destinationAccount );
        Transaction transaction2=transactionRepo.save(transaction);
        return ResponseEntity.ok(transaction2);
    }
}
