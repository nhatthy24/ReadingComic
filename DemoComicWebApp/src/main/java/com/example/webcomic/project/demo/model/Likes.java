package com.example.webcomic.project.demo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Likes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
	private User user;
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "comic_id", nullable = false)
	private Comic comic;
	
	public Likes() {
		super();
	}

	public Likes(long id, User user, Comic comic) {
		super();
		this.id = id;
		this.user = user;
		this.comic = comic;
	}
	
	

	public Likes(long id) {
		super();
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}
//
//	public Comic getComic() {
//		return comic;
//	}
//
//	public void setComic(Comic comic) {
//		this.comic = comic;
//	}
//	
	
}
