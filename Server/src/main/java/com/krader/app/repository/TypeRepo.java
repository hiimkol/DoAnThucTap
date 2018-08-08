package com.krader.app.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.krader.app.model.Type;

public interface TypeRepo extends CrudRepository<Type, Long> {
	@Query(value = "SELECT t FROM manga m INNER JOIN manga_type mt ON m.id_manga = mt.id_manga INNER JOIN type t ON mt.id_type = t.id_type WHERE m.id_manga = ?1")
	Iterable<Type> getTypesOfMangaId(int i);
}
