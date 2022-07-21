package com.example.webcomic.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.webcomic.project.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findById(long id);

	User findByEmail(String email);

	boolean existsByEmail(String email);

}
