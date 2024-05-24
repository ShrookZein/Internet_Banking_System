package com.global.Internet_Banking_System.service;

import com.global.Internet_Banking_System.Entity.User;
import com.global.Internet_Banking_System.repository.UserRepo;
import com.global.Internet_Banking_System.security.AppUserDetail;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public List<User>findAll(){
        return userRepo.findAll();
    }
    public User findById(Long id){
        return userRepo.findById(id).orElse(null);
    }
    public User save(User entity){
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return userRepo.save(entity);
    }
    public ResponseEntity<?> saveUser(Long adminId,User entity){
        System.out.println(userRepo.getById(adminId).getRoles().stream().findFirst().get().getName());
        if(!userRepo.getById(adminId).getRoles().stream().findFirst().get().getName().equals("admin")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An account Role with this NationalId ( "+adminId +" ) Not Admin.");
        }
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return ResponseEntity.ok(userRepo.save(entity));
    }
    public ResponseEntity<?> deleteUser(Long adminId,Long nationalId){
        System.out.println(userRepo.getById(adminId).getRoles().stream().findFirst().get().getName());
        if(!userRepo.getById(adminId).getRoles().stream().findFirst().get().getName().equals("admin")){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("An account Role with this NationalId ( "+adminId +" ) Not Admin.");
        }
        User user=userRepo.findById(nationalId).get();
        if (userRepo.findById(nationalId).isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("An account with this NationalId ( "+user.getNationalId() +" ) Not Found.");
        }

        userRepo.delete(user);
        return ResponseEntity.ok("User Delete successfully");
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByUserName(userName);
        if (!user.isPresent()) {
            throw new UsernameNotFoundException("This User Not Found With select userName");
        }
//        return new org.springframework.security.core.userdetails.User(user.get().getEmail(), user.get().getPassword(), getAuthorities(user.get()));
        return new AppUserDetail(user.get());
    }

    private static List<GrantedAuthority> getAuthorities(User user) {

        List<GrantedAuthority> authorities = new ArrayList<>();

        if (!user.getRoles().isEmpty()) {
            user.getRoles().forEach(role -> {
                authorities.add(new SimpleGrantedAuthority(role.getName()));
            });
        }
        return authorities;
    }
    public ResponseEntity<List<User>>findUsersByRolesName(String Rolename){
        return ResponseEntity.ok( userRepo.findByRolesName(Rolename));
    }
}
