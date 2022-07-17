package com.example.webcomic.project.demo.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webcomic.project.demo.exeption.ResourceNotFoundException;
import com.example.webcomic.project.demo.model.Chapter;
import com.example.webcomic.project.demo.model.Comic;
import com.example.webcomic.project.demo.model.Comment;
import com.example.webcomic.project.demo.model.Likes;
import com.example.webcomic.project.demo.model.User;
import com.example.webcomic.project.demo.repository.UserRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getAllComics() {
		return userRepository.findAll();
	}
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
		throws ResourceNotFoundException {
			User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
			return ResponseEntity.ok().body(user);
	}
	@PostMapping("/users")
	public User createUser( @Valid @RequestBody User usersDetails) {
		Calendar a=Calendar.getInstance();
		List<Comment> comments=new ArrayList<Comment>();
		List<Likes> likes=new ArrayList<Likes>();
		
		usersDetails.setDate_created(a);
		usersDetails.setListComment(comments);
		usersDetails.setListLikes(likes);
		
		return userRepository.save(usersDetails);
	}
	@DeleteMapping("/users/{id}")
	public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User usersDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Comic not found for this id :: " + userId));
		
		user.setAvatar(usersDetails.getAvatar());
		user.setName(usersDetails.getName());
		user.setEmail(usersDetails.getEmail());
		user.setPassword(usersDetails.getPassword());
		user.setDate_created(usersDetails.getDate_created());
		final User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	//Comment
	@GetMapping("users/{id}/comments")
	public List<Comment> getListCommentByUserId(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		return user.getListComment();
	}
	//Like
	@GetMapping("users/{id}/likes")
	public List<Likes> getListLikeByUserId(@PathVariable(value = "id") Long userId)
			throws ResourceNotFoundException {
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		return user.getListLikes();
	}
}
