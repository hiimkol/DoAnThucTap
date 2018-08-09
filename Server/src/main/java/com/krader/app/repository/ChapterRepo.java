package com.krader.app.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.krader.app.model.Chapter;

public interface ChapterRepo extends PagingAndSortingRepository<Chapter, Integer> {

	Iterable<Chapter> findAllByIdManga(Integer id);

	Chapter findByIdManga(Integer id);
	
	List<Chapter> findAllByIdManga(int id);

}