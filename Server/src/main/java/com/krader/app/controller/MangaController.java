package com.krader.app.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.krader.app.model.Manga;
import com.krader.app.model.ReaderManga;
import com.krader.app.model.ReaderMangaId;
import com.krader.app.model.Type;
import com.krader.app.repository.MangaRepo;
import com.krader.app.repository.MangaTypeRepo;
import com.krader.app.repository.ReaderMangaRepo;
import com.krader.app.repository.TypeRepo;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/manga")
public class MangaController {
	@Autowired
	private MangaRepo mangaRepo;
	@Autowired
	private MangaTypeRepo mangaTypeRepo;
	@Autowired
	private TypeRepo typeRepo;
	@Autowired
	private ReaderMangaRepo readerMangaRepo;

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Manga> getAllManga() {
		// This returns a JSON or XML with the users
		return mangaRepo.findAll();
	}

	@RequestMapping(method = RequestMethod.GET, value = "/page")
	public @ResponseBody Page<Manga> getAllManga(@RequestParam(value = "first") String first,
			@RequestParam(value = "last") String last) {
		// This returns a JSON or XML with the users
		int nfirst = Integer.parseInt(first);
		int nlast = Integer.parseInt(last);
//		System.out.println(id);
		System.out.println(nfirst + " " + nlast);
		return mangaRepo.findAll(PageRequest.of(nfirst, nlast));
	}

//	@GetMapping(path = "/type")
//	public @ResponseBody Iterable<Type> getTypeOfMangaId(@RequestParam(value = "id") String id) {
////		System.out.println(id);
////		Iterable<Manga> mangas = mangaRepo.findAll();
////		Iterable<MangaType> mangaTypes = mangaTypeRepo.findAll();
////		Iterable<Type> types = typeRepo.findAll();
////		
//		return typeRepo.getTypesOfMangaId(Integer.parseInt(id));
//
//	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Manga getMangaId(@RequestParam(value = "id") String id) {
		int idNumber = Integer.parseInt(id);
		System.out.println(idNumber);
		return mangaRepo.findByIdManga(idNumber);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/follow")
	@ResponseBody
	public Boolean isFollow(@RequestParam(value = "idManga") String idManga,
			@RequestParam(value = "username") String username) {
		System.out.println(readerMangaRepo.findById(new ReaderMangaId(username, Integer.parseInt(idManga))));
		return readerMangaRepo.findById(new ReaderMangaId(username, Integer.parseInt(idManga))).isPresent();
	}

	@GetMapping("/subcribe")
	@ResponseBody
	public ReaderManga subcribe(@RequestParam(value = "idManga") String idManga,
			@RequestParam(value = "username") String username) {
		return readerMangaRepo.save(new ReaderManga(new ReaderMangaId(username, Integer.parseInt(idManga))));
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/unsubcribe")
	@ResponseBody
	public Boolean unSubcribe(@RequestParam(value = "idManga") String idManga,
			@RequestParam(value = "username") String username) {
		
		readerMangaRepo.delete(new ReaderManga(new ReaderMangaId(username, Integer.parseInt(idManga))));
		return isFollow(idManga, username);
	}
	@GetMapping("/getMangaWithType")
	@ResponseBody
	public Iterable<Manga> getMangaWithType(@RequestParam(value="name") String name) {
		System.out.println(name);
		return mangaRepo.findAllByType(name);
	}
	@GetMapping("/search")
	@ResponseBody
	public Iterable<Manga> searchByName(@RequestParam(value="name") String name) {
//		return mangaRepo.findAllByNameMangaLikeIgnoreCase(name);
//		return mangaRepo.findAllByNameMangaLike(name);
		return mangaRepo.findAllByNameMangaLike(name);
	}
	@GetMapping("/getAllMangaFollowed")
	@ResponseBody
	public Iterable<Manga> getAllMangaFollowed(@RequestParam(value="name") String name) {
//		return mangaRepo.findAllByNameMangaLikeIgnoreCase(name);
//		return mangaRepo.findAllByNameMangaLike(name);
		System.out.println(name);
		return mangaRepo.getAllMangaFollowed(name);
	}
	
}
