package com.krader.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.krader.app.model.Manga;
import com.krader.app.model.Type;
import com.krader.app.repository.TypeRepo;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/type")
public class TypeController {
	@Autowired
	private TypeRepo typeRepo;
	
	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Type> getAllManga() {
		// This returns a JSON or XML with the users
		return typeRepo.findAll();
	}
}
