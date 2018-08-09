package com.krader.app.repository;


import org.springframework.data.repository.CrudRepository;

import com.krader.app.model.Comment;

//import com.krader.app.model.Comment;

public interface CommentRepo extends CrudRepository<Comment, Integer> {
	Iterable<Comment> findAllByIdManga(int id);
}
