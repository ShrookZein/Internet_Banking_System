package com.global.Internet_Banking_System.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AddUserDto {

    private String fullName;
    private String userName;
    private Long nationalId;
    private String email;
    private String password;
}
