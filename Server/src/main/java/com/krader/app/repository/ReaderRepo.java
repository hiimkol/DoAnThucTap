package com.krader.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.krader.app.model.MangaType;
import com.krader.app.model.Reader;

public interface ReaderRepo extends CrudRepository<Reader,Long>{
	Reader findByUsername(String username);
	Reader findByUsernameAndPassword(String username, String password);
}
