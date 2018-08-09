package com.krader.app.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.krader.app.model.Chapter;

public interface ChapterRepo extends PagingAndSortingRepository<Chapter, Long> {

	Iterable<Chapter> findAllByIdManga(Integer id);

	Chapter findByIdManga(Integer id);

}