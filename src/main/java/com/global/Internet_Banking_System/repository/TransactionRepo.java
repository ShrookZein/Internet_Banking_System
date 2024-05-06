package com.global.Internet_Banking_System.repository;

import com.global.Internet_Banking_System.Entity.Accounts;
import com.global.Internet_Banking_System.Entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface TransactionRepo extends JpaRepository<Transaction,Long> {
    @Query("SELECT t FROM Transaction t WHERE t.sourceAccount=?1")
    Set<Transaction>findBySourceAccount(Accounts sourceAccount);
}
