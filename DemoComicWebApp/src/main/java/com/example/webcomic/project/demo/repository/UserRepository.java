package com.example.webcomic.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webcomic.project.demo.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
