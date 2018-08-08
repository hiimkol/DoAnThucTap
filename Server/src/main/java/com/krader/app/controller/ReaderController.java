package com.krader.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.krader.app.model.Reader;
import com.krader.app.repository.ReaderRepo;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/user")
public class ReaderController {
	@Autowired
	ReaderRepo readerRepo;

	
	@PostMapping(path = "/regist")
	@ResponseBody
	public Reader regist(@RequestBody Reader reader) {
		System.out.println("reader:" + reader.getUsername());
		if (readerRepo.findByUsername(reader.getUsername()) != null) {
			return null;
		}
		return readerRepo.save(reader);
	}

	@PostMapping(path = "/login")
	@ResponseBody
	public Reader login(@RequestBody Reader reader) {
		Reader r = readerRepo.findByUsernameAndPassword(reader.getUsername(), reader.getPassword());
		if ( r!=null) {
			return r;
		}
		return null;
	}
}
