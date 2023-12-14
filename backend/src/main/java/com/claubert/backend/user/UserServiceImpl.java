package com.claubert.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    };
    UserRepository userRepository;
    @Override
    public User create(User user) {
        User existUser = userRepository.findByUsername(user.getUsername());
        if (existUser != null){
            throw new Error("User Already exists!");
        }
    user.setPassword(passwordEncoder().encode(user.getPassword()));
        User createUser  = userRepository.save(user);
        return createUser;
    }
}
