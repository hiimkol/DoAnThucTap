package com.krader.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.krader.app.model.Comment;
import com.krader.app.model.Manga;
import com.krader.app.repository.ChapterRepo;
import com.krader.app.repository.CommentRepo;
import com.krader.app.repository.MangaRepo;
import com.krader.app.repository.ReaderRepo;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/statist")
public class StatistController {
	@Autowired
	private CommentRepo commentRepo;
	@Autowired
	private MangaRepo mangaRepo;
	@Autowired
	private ReaderRepo readerRepo;
	@Autowired
	private ChapterRepo chapterRepo;
	
	@GetMapping("/getNumberManga")
	@ResponseBody
	public int getNumberManga() {
		return (int) mangaRepo.count();
	}

	@GetMapping("/getNumberChapter")
	@ResponseBody
	public int getNumberChapter() {
		return (int) chapterRepo.count();
	}
	@GetMapping("/getNumberComment")
	@ResponseBody
	public int getNumberComment() {
		return (int) commentRepo.count();
	}
	@GetMapping("/getNumberMember")
	@ResponseBody
	public int getNumberMember() {
		return (int) readerRepo.count();
	}
}
