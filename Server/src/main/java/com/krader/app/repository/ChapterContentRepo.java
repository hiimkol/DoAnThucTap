package com.krader.app.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.krader.app.model.ChapterDetail;
import com.krader.app.model.ChapterDetailId;

public interface ChapterContentRepo extends PagingAndSortingRepository<ChapterDetail, ChapterDetailId> {

	@Query(value = "SELECT * FROM chapter JOIN chapter_detail ON chapter.id_chapter = chapter_detail.id_chapter AND chapter.id_chapter = :id", nativeQuery = true)
	Iterable<ChapterDetail> findAllByIdChapter(Integer id);

}