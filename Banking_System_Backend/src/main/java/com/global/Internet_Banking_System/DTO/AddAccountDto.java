package com.global.Internet_Banking_System.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AddAccountDto {
    private Long accountNumber;
    private Double balance;
    private Long nationalId;
}
