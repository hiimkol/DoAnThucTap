package com.krader.app.model;
// Generated Aug 7, 2018 9:16:41 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Chapter generated by hbm2java
 */
@Entity
@Table(name = "chapter", catalog = "ComicDB")
public class Chapter implements java.io.Serializable {

	private Integer idChapter;
	private int idManga;

	public Chapter() {
	}

	public Chapter(int idManga) {
		this.idManga = idManga;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id_chapter", unique = true, nullable = false)
	public Integer getIdChapter() {
		return this.idChapter;
	}

	public void setIdChapter(Integer idChapter) {
		this.idChapter = idChapter;
	}

	@Column(name = "id_manga", nullable = false)
	public int getIdManga() {
		return this.idManga;
	}

	public void setIdManga(int idManga) {
		this.idManga = idManga;
	}

}