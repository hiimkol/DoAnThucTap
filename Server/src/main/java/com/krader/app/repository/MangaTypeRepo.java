package com.krader.app.repository;

import org.springframework.data.repository.CrudRepository;

import com.krader.app.model.MangaType;

public interface MangaTypeRepo extends CrudRepository<MangaType,Long> {
	
}
