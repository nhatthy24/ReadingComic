package com.example.webcomic.project.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webcomic.project.demo.enumeration.RoleName;
import com.example.webcomic.project.demo.model.Role;
import com.example.webcomic.project.demo.model.User;

public interface RoleRepository extends JpaRepository<Role, Long>{

	Optional<Role> findByName(RoleName name);
	

}
