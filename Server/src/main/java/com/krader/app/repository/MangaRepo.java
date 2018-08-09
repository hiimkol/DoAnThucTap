package com.krader.app.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.krader.app.model.Manga;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
//@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface MangaRepo extends PagingAndSortingRepository<Manga, Long> {
	Manga findByIdManga(Integer id);
	@Query(value="SELECT * FROM manga m  JOIN manga_type mt ON m.id_manga = mt.id_manga  JOIN type t ON mt.id_type = t.id_type AND t.name = :name", nativeQuery=true)
	Iterable<Manga> findAllByType(String name);
	
	@Query(value="SELECT * FROM manga m WHERE m.name_manga LIKE %:name%", nativeQuery=true)
	Iterable<Manga> findAllByNameMangaLike(String name);
	
	
}