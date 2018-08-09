package com.krader.app.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.krader.app.model.ReaderManga;
import com.krader.app.model.ReaderMangaId;

public interface ReaderMangaRepo  extends CrudRepository<ReaderManga, ReaderMangaId>{
//	@Query(value="",nativeQuery=true)
//	ReaderManga findById_(String username,int idManga);
}
