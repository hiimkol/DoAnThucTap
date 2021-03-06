package com.krader.app.model;
// Generated Aug 9, 2018 3:31:01 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * ChapterDetail generated by hbm2java
 */
@Entity
@Table(name = "chapter_detail", catalog = "ComicDB")
public class ChapterDetail implements java.io.Serializable {

	private ChapterDetailId id;

	public ChapterDetail() {
	}

	public ChapterDetail(ChapterDetailId id) {
		this.id = id;
	}

	@EmbeddedId

	@AttributeOverrides({
			@AttributeOverride(name = "idChapter", column = @Column(name = "id_chapter", nullable = false)),
			@AttributeOverride(name = "img", column = @Column(name = "img", nullable = false)) })
	public ChapterDetailId getId() {
		return this.id;
	}

	public void setId(ChapterDetailId id) {
		this.id = id;
	}

}
