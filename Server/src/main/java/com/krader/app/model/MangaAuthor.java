package com.krader.app.model;
// Generated Aug 9, 2018 3:31:01 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * MangaAuthor generated by hbm2java
 */
@Entity
@Table(name = "manga_author", catalog = "ComicDB")
public class MangaAuthor implements java.io.Serializable {

	private MangaAuthorId id;

	public MangaAuthor() {
	}

	public MangaAuthor(MangaAuthorId id) {
		this.id = id;
	}

	@EmbeddedId

	@AttributeOverrides({ @AttributeOverride(name = "idManga", column = @Column(name = "id_manga", nullable = false)),
			@AttributeOverride(name = "idAuthor", column = @Column(name = "id_author", nullable = false)) })
	public MangaAuthorId getId() {
		return this.id;
	}

	public void setId(MangaAuthorId id) {
		this.id = id;
	}

}
