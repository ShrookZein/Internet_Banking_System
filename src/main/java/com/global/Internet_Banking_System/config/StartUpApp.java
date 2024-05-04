package com.global.Internet_Banking_System.config;

import com.global.Internet_Banking_System.Entity.RoleModel;
import com.global.Internet_Banking_System.Entity.User;
import com.global.Internet_Banking_System.service.RoleService;
import com.global.Internet_Banking_System.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class StartUpApp implements CommandLineRunner {
    private final UserService userService;

    private final RoleService roleService;

    @Override
    public void run(String... args) throws Exception {


        if (roleService.findAll().isEmpty()) {
            roleService.save(new RoleModel(null, "admin"));
            roleService.save(new RoleModel(null, "user"));
        }


        if (userService.findAll().isEmpty()) {

            Set<RoleModel> adminRoles = new HashSet<>();
            adminRoles.add(roleService.findByName("admin"));

            Set<RoleModel> userRoles = new HashSet<>();
            userRoles.add(roleService.findByName("user"));


            userService.save(new User((Long) null, "Nour","Shaheen90","300075215333845", "nour@gmail.com", "12345678",adminRoles,true,true,true,true));

            userService.save(new User(null, "Ali","Mohamed12","15895254789652", "ali@gmail.com", "12345678",adminRoles,true,true,true,true));

            userService.save(new User(null, "Shrook","Zein8080","445588776622554", "srouk7007@gmail.com", "12345678",userRoles,true,true,true,true));
            userService.save(new User(null, "Maha","Gaber5050","15246857954632", "Maha20@gmail.com", "12345678",userRoles,true,true,true,true));
            userService.save(new User(null, "Noha","Zeinnn8070","521478952347568", "Noha@gmail.com", "12345678",userRoles,true,true,true,true));
            userService.save(new User(null, "Mohamed","Maher774","452178945632154", "mohamed20@gmail.com", "123456789",userRoles,true,true,true,true));
        }

    }
}
