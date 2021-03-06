package com.krader.app.model;
// Generated Aug 9, 2018 3:31:01 PM by Hibernate Tools 5.2.11.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * MangaType generated by hbm2java
 */
@Entity
@Table(name = "manga_type", catalog = "ComicDB")
public class MangaType implements java.io.Serializable {

	private MangaTypeId id;

	public MangaType() {
	}

	public MangaType(MangaTypeId id) {
		this.id = id;
	}

	@EmbeddedId

	@AttributeOverrides({ @AttributeOverride(name = "idType", column = @Column(name = "id_type", nullable = false)),
			@AttributeOverride(name = "idManga", column = @Column(name = "id_manga", nullable = false)) })
	public MangaTypeId getId() {
		return this.id;
	}

	public void setId(MangaTypeId id) {
		this.id = id;
	}

}
