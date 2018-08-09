package com.krader.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.krader.app.model.Chapter;
import com.krader.app.model.ChapterDetail;
import com.krader.app.model.Manga;
import com.krader.app.repository.ChapterContentRepo;
import com.krader.app.repository.ChapterRepo;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/chapter")
public class ChapterController {
	@Autowired
	private ChapterRepo chapterRepo;
	@Autowired
	private ChapterContentRepo chapterContentRepo;

	@GetMapping
	public @ResponseBody Iterable<Chapter> getAllManga(@RequestParam(value = "id") String id) {
		return chapterRepo.findAllByIdManga(Integer.valueOf(id));
//				(Integer.valueOf(id));
	}

	@GetMapping("/getContent")
	public @ResponseBody Iterable<ChapterDetail> getAllChapterContent(@RequestParam(value = "id") String id) {
		System.out.println("askldjlsakj" + chapterContentRepo.findAllByIdChapter(Integer.valueOf(id)));
		return chapterContentRepo.findAllByIdChapter(Integer.valueOf(id));
//				(Integer.valueOf(id));
	}
	@GetMapping("/getNewestChapter")
	@ResponseBody
	public Chapter getNewestChapter(@RequestParam(value="id") String id) {
		int idNumber = Integer.parseInt(id);
		return chapterRepo.findAllByIdManga(idNumber).get(chapterRepo.findAllByIdManga(idNumber).size()-1);
	}
}
