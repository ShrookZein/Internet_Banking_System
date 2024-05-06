package com.global.Internet_Banking_System.Entity;

//import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
public class RoleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long id;
    private String name;
//    @ManyToMany(cascade = CascadeType.ALL)
//    @JsonIgnore
//    @JoinTable(name = "sec_user_roles",joinColumns = @JoinColumn(name = "role_id"),inverseJoinColumns = @JoinColumn(name = "user_id",referencedColumnName = "national_id"))
//    private Set<User> users=new HashSet<>();
}
