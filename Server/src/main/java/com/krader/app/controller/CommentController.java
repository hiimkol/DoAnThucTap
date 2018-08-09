package com.krader.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.krader.app.model.Comment;
import com.krader.app.model.Reader;
//import com.krader.app.model.Comment;
//import com.krader.app.model.Manga;
import com.krader.app.repository.CommentRepo;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/comment")
public class CommentController {
	@Autowired
	private CommentRepo commentRepo;

	@GetMapping("/getCommentsOfManga")
	@ResponseBody
	public Iterable<Comment> getMangaWithType(@RequestParam(value = "id") String id) {
		System.out.println(id);
		return commentRepo.findAllByIdManga(Integer.parseInt(id));
	}

	@GetMapping("/add")
	@ResponseBody
	public Comment addComment(@RequestParam(value = "username") String username,
			@RequestParam(value = "idManga") String idManga, @RequestParam(value = "content") String content) {
		return commentRepo.save(new Comment(username, Integer.parseInt(idManga), content));
	}
}
