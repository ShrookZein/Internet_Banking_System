package com.global.Internet_Banking_System.config;

import com.global.Internet_Banking_System.Entity.RoleModel;
import com.global.Internet_Banking_System.Entity.User;
import com.global.Internet_Banking_System.service.RoleService;
import com.global.Internet_Banking_System.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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

//            RoleModel roleModel=new RoleModel(null, "admin",null);
//            RoleModel roleModel1=new RoleModel(null, "user",null);
//            --------------------------------------------------------------------------

            List<RoleModel> adminRoles = new ArrayList<>();
//            RoleModel roleModel=roleService.findByName("admin");
//            System.out.println(roleModel.toString());

            adminRoles.add(roleService.findByName("admin"));
//            adminRoles.add(roleModel);

            List<RoleModel> userRoles = new ArrayList<>();
            userRoles.add(roleService.findByName("user"));
//            userRoles.add(roleModel1);

            userService.save(new User(30007521533384L, "Nour","Shaheen90", "nour@gmail.com", "12345678",adminRoles,null,true,true,true,true));

            userService.save(new User(30007521533385L, "Ali","AliMohamed12", "ali@gmail.com", "12345678",adminRoles,null,true,true,true,true));

            userService.save(new User(30007521533377L, "Shrook","Zein8080", "srouk7007@gmail.com", "12345678",userRoles,null,true,true,true,true));
            userService.save(new User(37007521533384L, "Maha","Gaber5050", "Maha20@gmail.com", "12345678",userRoles,null,true,true,true,true));
            userService.save(new User(30007521533484L, "Noha","Zeinnn8070", "Noha@gmail.com", "12345678",userRoles,null,true,true,true,true));
            userService.save(new User(30447521533384L, "Mohamed","Maher774", "mohamed20@gmail.com", "123456789",userRoles,null,true,true,true,true));
        }

    }
}
