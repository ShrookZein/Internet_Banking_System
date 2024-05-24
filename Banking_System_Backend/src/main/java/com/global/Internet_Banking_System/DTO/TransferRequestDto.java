package com.global.Internet_Banking_System.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TransferRequestDto {

    private Long sourceAccountNumber;
    private Long destinationAccountNumber;
    private double amount;

}
