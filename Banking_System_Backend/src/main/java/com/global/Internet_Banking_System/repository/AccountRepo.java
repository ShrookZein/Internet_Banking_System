package com.global.Internet_Banking_System.repository;

import com.global.Internet_Banking_System.Entity.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface AccountRepo extends JpaRepository<Accounts,Long> {
     @Query("SELECT a FROM Accounts a WHERE a.boolNationalId=?1")
     List<Accounts> findByBoolNationalId(Long boolNationalId);
}
