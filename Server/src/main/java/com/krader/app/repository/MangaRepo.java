package com.krader.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.krader.app.model.Manga;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
//@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface MangaRepo extends PagingAndSortingRepository<Manga, Long> {
	Manga findByIdManga(Integer id);
	
}